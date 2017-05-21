package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.CategoryCompanyRelation;
import com.teamrocket.seng3011.analysisPlatform.models.Company;
import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.absApi.CacheManager;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.Pipeline;

import java.io.IOException;
import java.util.Arrays;
import java.util.Set;

/**
 * Created by JHXSMatthew on 20/05/2017.
 */
public class SQLManager {

    private static SQLManager manager;



    public SQLManager(){
        //use redis as sql
        //initialization done in cache manager
        //should use other relational database in production.

    }

    private String getRelationKey(EntryType area, HaveID category){
        return "CCR:"+area.getCacheKey() + ":" + category.getId();
    }

    public CategoryCompanyRelation getRelation(EntryType area, HaveID category) throws IOException {
        Jedis jedis = getResource();
        try {
            Set<String> relations = jedis.smembers(getRelationKey(area, category));
            if (relations != null && relations.size() > 0) {
                ObjectMapper mapper = new ObjectMapper();
                Company[] companies = new Company[relations.size()];
                int i = 0;
                for (String s : relations) {
                    companies[i++] = mapper.readValue(s, Company.class);
                }
                return new CategoryCompanyRelation(area, companies);
            }
            return null;
        }finally {
            jedis.close();
        }
    }

    public boolean setRelation(EntryType area, HaveID[] categories , Company companies){
        Jedis jedis = getResource();
        try {
            Pipeline pipeline = jedis.pipelined();
            ObjectMapper mapper = new ObjectMapper();
            Arrays.stream(categories).forEach(c -> {
                try {
                    pipeline.sadd(getRelationKey(area, c), mapper.writeValueAsString(companies));
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
            });
            pipeline.sync();
            return true;
        }finally {
            jedis.close();
        }
    }

    private Jedis getResource(){
        return CacheManager.getManager().getResource();
    }

    public static SQLManager getManager(){
        if(manager == null){
            manager = new SQLManager();
        }
        return manager;
    }
}
