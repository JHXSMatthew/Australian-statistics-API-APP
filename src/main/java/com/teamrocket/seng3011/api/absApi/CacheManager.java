package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.APIConfiguration;
import com.teamrocket.seng3011.api.absApi.entries.DateDataEntry;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.util.Date;

/**
 * Created by JHXSMatthew on 23/4/17.
 */
public class CacheManager {

    private static CacheManager manager = null;

    private JedisPool pool;

    public CacheManager(){
        manager = this;
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(1000); //TODO: adjuest this while production
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
        return false; //TODO; implement this
    }

    public void cache(int area, int category, int region, String date,String data){
        Jedis jedis = pool.getResource();
        jedis.hsetnx(getKey(area,category,region),date,data);
    }

    public DateDataEntry[] getCache(int area, int category, int region, Date start, Date end){
        DateDataEntry[] returnValue = null;
        Jedis jedis = pool.getResource();
        return returnValue;
    }

    public static CacheManager getManager(){
        if(manager == null){
            manager = new CacheManager();
        }
        return manager;
    }

}
