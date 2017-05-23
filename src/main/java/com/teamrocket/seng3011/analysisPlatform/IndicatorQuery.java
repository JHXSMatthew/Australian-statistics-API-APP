package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.CategoryCompanyRelation;
import com.teamrocket.seng3011.analysisPlatform.models.CompanyData;
import com.teamrocket.seng3011.analysisPlatform.models.CompanyStockEntry;
import com.teamrocket.seng3011.analysisPlatform.models.DateValue;
import com.teamrocket.seng3011.utils.DateUtils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class IndicatorQuery {


    List<CompanyStockEntry> rowData;

    @JsonCreator
    public IndicatorQuery(@JsonProperty("instrumentId")String companyID,
                          @JsonProperty("startDate")String startingDate,
                          @JsonProperty("endDate")String endDate) throws IOException {
        rowData = new ArrayList<>();
        URL url = new URL("http://api.kaiworship.xyz/cmp/"+ companyID+"/" + startingDate +"/" + endDate);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("User_Agent", "Mozilla/5.0");
        BufferedReader in = new BufferedReader(
                new InputStreamReader(connection.getInputStream()));
        String output;
        String[] names = null;
        while ((output = in.readLine()) != null) {
            if(names != null){
                HashMap<String,Object> map = new HashMap<>();
                String[] inside = output.split(",");
                for(int j = 0 ; j < inside.length ; j ++){
                    map.put(names[j],inside[j]);
                }
                CompanyStockEntry entry = new CompanyStockEntry(map);
                if(entry.valid()) {
                    rowData.add(entry);
                }
            }else{
                names = output.split(",");
            }
        }
        in.close();
    }

    public String get() throws JsonProcessingException {
        List<DateValue> simpleMovingAverage = new ArrayList<>();
        List<DateValue> rawMoneyFlow = new ArrayList<>();
        float totalClose = 0;
        for(CompanyStockEntry row : rowData){
            totalClose +=  row.getAdjClose();
            simpleMovingAverage.add(new DateValue(row.getDate(),totalClose/simpleMovingAverage.size()));
            float typicalPrice = (row.getHigh() + row.getLow() + row.getClose())/3f;
            rawMoneyFlow.add(new DateValue(row.getDate(), typicalPrice * row.getVolume()));
        }



        List<CompanyData> companyDataList = new ArrayList<>();
        companyDataList.add(new CompanyData("Simple Moving Average"
                ,simpleMovingAverage.toArray(new DateValue[simpleMovingAverage.size()])));
        companyDataList.add(new CompanyData("Row Money Flow",rawMoneyFlow.toArray(new DateValue[rawMoneyFlow.size()])));
        ObjectMapper mapper = new ObjectMapper();

        return mapper.writeValueAsString(companyDataList.toArray(new CompanyData[companyDataList.size()]));
    }
}
