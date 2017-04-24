package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.APIConfiguration;
import com.teamrocket.seng3011.api.absApi.entries.DateDataEntry;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;
import com.teamrocket.seng3011.utils.DateRange;
import com.teamrocket.seng3011.utils.DateUtils;
import redis.clients.jedis.*;

import java.util.*;

/**
 * Created by JHXSMatthew on 23/4/17.
 */
public class CacheManager {

    private static CacheManager manager = null;

    private JedisPool pool;

    public CacheManager(){
        manager = this;
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(1000); //TODO: change this while production
        config.setMaxWaitMillis(1000);
        try{
            pool = new JedisPool(config,"localhost",6379);
            APIConfiguration.cache = true;
        }catch (Exception e){
            e.printStackTrace();
            manager = null;
            APIConfiguration.cache = false;
        }
    }


    private String getKey(int area,int category, int region){
        return area+":"+category+":"+region;
    }


    public boolean isCached(int area, int category, int region, Date start, Date end){
        String key = getKey(area,category,region);
        Jedis jedis = pool.getResource();
        String range = jedis.hget(key,"range");
        if(range == null){
            return false;
        }
        List<DateRange> ranges = DateUtils.stringToDataRange(range);
        for(DateRange r : ranges){
            if(r.isInRange(start) && r.isInRange(end)){
                return true;
            }
        }
        return false;
    }


    /**
     *  cache the actual data
     * @param area
     * @param category
     * @param region
     * @param date
     * @param data
     */
    public void cache(int area, int category, int region, String date,String data){
        Jedis jedis = pool.getResource();
        jedis.hsetnx(getKey(area,category,region),date,data);
    }

    /**
     *  cache the date range , fast looking up
     * @param area
     * @param category
     * @param region
     * @param starting
     * @param end
     */
    public void cache (int area, int category, int region, Date starting, Date end){
        Jedis jedis = pool.getResource();
        String key = getKey(area,category,region);
        String raw = jedis.hget(key,"range");
        List<DateRange> ranges;
        if(raw == null || raw.equals("")){
            ranges = new ArrayList<>();
        }else{
            ranges = DateUtils.stringToDataRange(raw);
        }
        ranges.add(new DateRange(starting,end));

        List<DateRange> merged = merge(ranges);

        //TODO; check concurrent modification of redis cache, don't know if it is ok without transaction.
        jedis.hset(key,"range",DateUtils.dateRangeToString(merged));
    }

    //TODO: speed this up by sorting the array and so on
    private List<DateRange> merge(Collection<DateRange> ranges){
        Set<DateRange> merged  =new HashSet<>();
        boolean m = false;
        for(DateRange d : ranges){
            for(DateRange r : ranges){
                try{
                    merged.add(d.merge(r));
                    m = true;
                }catch (Exception e){
                    if (!e.getMessage().contains("Cannot merge date range")) {
                        e.printStackTrace();
                    }
                    merged.add(r);
                    merged.add(d);
                }
            }
        }
        if(m) {
            return merge(merged);
        }else{
            List<DateRange> result = new ArrayList<>();
            result.addAll(merged);
            return result;
        }
    }



    public DateDataEntry[] getCache(int area, int category, int region, Date start, Date end) throws CannotParseStatsTypeException {
        List<DateDataEntry> returnValue = new ArrayList<>();
        String key = getKey(area,category,region);
        Jedis jedis = pool.getResource();
        Calendar s = Calendar.getInstance();
        Calendar e = Calendar.getInstance();
        s.set(Calendar.DAY_OF_MONTH,1);
        e.set(Calendar.DAY_OF_MONTH,1);
        s.setTime(start);
        e.setTime(end);
        int loopMax =  (e.get(Calendar.YEAR) - s.get(Calendar.YEAR))* 12 + (e.get(Calendar.MONTH) - s.get(Calendar.MONTH)) + 1;
        for(int i = 0 ; i < loopMax ; i ++){
            s.add(Calendar.MONTH, 1);
            s.add(Calendar.DATE, -1);
            returnValue.add(EntryFactory.getFactory().getDateDataEntry(
                    s.getTime(),
                    Double.parseDouble(jedis.hget(key,DateUtils.dateToStringYMD(s.getTime()))),
                    EntryType.parseType(area)
            ));
            s.set(Calendar.DAY_OF_MONTH,1);
            s.add(Calendar.MONTH, 1);
        }
        return returnValue.toArray(new DateDataEntry[returnValue.size()]);
    }

    public static CacheManager getManager(){
        if(manager == null){
            manager = new CacheManager();
        }
        return manager;
    }

}
