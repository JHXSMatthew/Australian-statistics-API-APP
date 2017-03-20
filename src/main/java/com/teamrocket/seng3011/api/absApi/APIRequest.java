package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.APIController;
import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.State;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import com.teamrocket.seng3011.api.exceptions.CannotFetchDataException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;
import com.teamrocket.seng3011.utils.DateUtils;
import com.teamrocket.seng3011.utils.StringUtils;


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class APIRequest {
    private static String RT_URL = "http://stat.data.abs.gov.au/sdmx-json/data/RT/";
    private static String EXPORT_URL = "http://stat.data.abs.gov.au/sdmx-json/data/MERCH_EXP/";

    private EntryType type;
    private State[] states = null;
    private HaveID[] categories = null;
    private Date starting;
    private Date ending;
    private String fetchedCache = null;

    public APIRequest(EntryType area) throws CannotParseStatsTypeException {
        type = area;
    }

    public APIRequest setState(State[] state) {
        states = state;
        return this;
    }

    public APIRequest setCategories(HaveID[] haveIDS) {
        this.categories = haveIDS;
        return this;
    }

    public APIRequest setDate(Date starting, Date ending) {
        this.starting = starting;
        this.ending = ending;
        return this;
    }

    public APIRequest fetch() throws CannotFetchDataException, ParseException {
        String jsonResponse = (String) sendHTTPGet(getURL());
        fetchedCache = jsonResponse;
        return this;
        //return jsonResponse; //TODO: parse data fetched.
    }

    public Object parse() throws ParseException {
        DataParser container = new DataParser(fetchedCache);
        return container.parse().parseEntries(type);
    }

    private String getURL() {
        String url = null;
        Map<String, String> vars = new HashMap<>();
        if (type == EntryType.RETAIL) {
            url = RT_URL;
            vars.put("states", StringUtils.haveIdToIdString(states));
            vars.put("dataType", "2");
            vars.put("categories", StringUtils.haveIdToIdString(categories));
            vars.put("adjType", "10");
            url += "{states}.{dataType}.{categories}.{adjType}.{timeLength}";
            //http://stat.data.abs.gov.au/sdmx-json/data/RT/1+2+3.2.41+42+43.10.M/all?startTime=2015-01&endTime=2015-12&dimensionAtObservation=allDimensions
        } else if (type == EntryType.EXPORT) {
            url = EXPORT_URL;
            vars.put("states", StringUtils.haveIdToIdString(states).replaceAll("0", "-")); //special case
            vars.put("categories", StringUtils.haveIdToIdString(categories));
            vars.put("destination", "-");
            vars.put("industryOfOrigin","-1");
            url += "{states}.{categories}.{industryOfOrigin}.{destination}.{timeLength}";
            //http://stat.data.abs.gov.au/sdmx-json/data/MERCH_EXP/-.-1+0+1+2+3+4+5+6+7+8+9.-1.-.M/all?startTime=2016-06&endTime=2016-12&dimensionAtObservation=allDimensions
        }
        vars.put("timeLength", "M");
        vars.put("starting", DateUtils.dateToStringYM(starting));
        vars.put("ending", DateUtils.dateToStringYM(ending));
        url += "/all?startTime={starting}&endTime={ending}&dimensionAtObservation=allDimensions";
        for (String s : vars.keySet())
            url = url.replace("{" + s + "}", vars.get(s));
        APIController.debugPrint("gov API URL: " + url);
        return url;
    }

    private Object sendHTTPGet(String URL) throws CannotFetchDataException {
        try {
            URL url = new URL(URL);
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
            return response.toString();

        } catch (Exception e) {
            e.printStackTrace();
            throw new CannotFetchDataException("cannot fetch data HTTP error, API down?");
        }
    }

}
