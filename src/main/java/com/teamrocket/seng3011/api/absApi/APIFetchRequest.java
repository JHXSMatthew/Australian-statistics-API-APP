package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.State;
import com.teamrocket.seng3011.api.exceptions.CannotFetchDataException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;
import com.teamrocket.seng3011.utils.DateUtils;
import com.teamrocket.seng3011.utils.StringUtils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class APIFetchRequest {
    private static String RT_URL = "http://stat.data.abs.gov.au/sdmx-json/data/RT/";
    private static String EXPORT_URL = "http://stat.data.abs.gov.au/sdmx-json/data/MERCH_EXP/";

    private String url = null;
    private EntryType type;
    private State[] states = null;
    private HaveID[] categories = null;
    private Date starting;
    private Date ending;

    public APIFetchRequest(String area) throws CannotParseStatsTypeException {
        EntryType type = EntryType.parseType(area);
        this.type = type;
        if(type == EntryType.EXPORT){
            url = EXPORT_URL;
        }else if(type == EntryType.RETAIL){
            url = RT_URL;
        }else{
            throw new CannotParseStatsTypeException(area);
        }

    }

    public APIFetchRequest setState(State[] state){
        states = state;
        return this;
    }

    public APIFetchRequest setCategories(HaveID[] haveIDS){
        this.categories = haveIDS;
        return this;
    }

    public APIFetchRequest setDate(Date starting, Date ending){
        this.starting = starting;
        this.ending = ending;
        return this;
    }

    public Object fetch() throws CannotFetchDataException {
        Map<String,String> vars = new HashMap<>();
        vars.put("timeLength","M");
        vars.put("starting", DateUtils.dateToStringYM(starting));
        vars.put("ending", DateUtils.dateToStringYM(ending));
        if(type == EntryType.RETAIL) {
            vars.put("states", StringUtils.haveIdToIdString(states));
            vars.put("dataType", "2");
            vars.put("categories", StringUtils.haveIdToIdString(categories));
            vars.put("adjType","10");
            url += "{states}.{dataType}.{categories}.{adjType}.{timeLength}";
            //http://stat.data.abs.gov.au/sdmx-json/data/RT/1+2+3.2.41+42+43.10.M/all?startTime=2015-01&endTime=2015-12&dimensionAtObservation=allDimensions
        }else if(type == EntryType.EXPORT){
            vars.put("states",StringUtils.haveIdToIdString(states).replaceAll("0","-")); //special case
            vars.put("categories", StringUtils.haveIdToIdString(categories));
            vars.put("destination.","-");
            url += "{states}.{categories}.{destination}.{timeLength}";
            //http://stat.data.abs.gov.au/sdmx-json/data/MERCH_EXP/-.-1+0+1+2+3+4+5+6+7+8+9.-1.-.M/all?startTime=2016-06&endTime=2016-12&dimensionAtObservation=allDimensions
        }
        url += "/all?startTime={starting}&endTime={ending}&dimensionAtObservation=allDimensions";
        for(String s : vars.keySet())
            url = url.replace("{"+ s+"}", vars.get(s));

        System.err.println(url); //TODO: remove tests prints
        try {
            URL url = new URL(this.url);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("User_Agent", "Mozilla/5.0");
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(connection.getInputStream()));
            String output;
            StringBuffer response = new StringBuffer();
            while ((output = in.readLine()) != null) {
                response.append(output);
            }
            in.close();
            return response.toString(); //TODO: parse data fetched.

        }catch (Exception e){
            e.printStackTrace();
            throw new CannotFetchDataException();
        }
    }


}
