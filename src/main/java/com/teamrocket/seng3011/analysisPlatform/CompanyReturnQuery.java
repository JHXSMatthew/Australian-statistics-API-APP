package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.*;
import com.teamrocket.seng3011.api.exceptions.KnownException;
import com.teamrocket.seng3011.utils.DateUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by JHXSMatthew on 30/05/2017.
 */
public class CompanyReturnQuery extends IndicatorQuery {

    private int upper;
    private int lower;
    private String date;


    @JsonCreator
    public CompanyReturnQuery(@JsonProperty("id")String companyID,
                              @JsonProperty("dateOfInterest")String date,
                              @JsonProperty("upperWindow") String upper,
                              @JsonProperty("lowerWindow") String lower) throws IOException, KnownException {
        super(companyID,
                DateUtils.dateToStringYMD(DateUtils.addDate(DateUtils.stringToDateYMD(date),-2* Integer.parseInt(lower) -1)),
                DateUtils.dateToStringYMD(DateUtils.addDate(DateUtils.stringToDateYMD(date),Integer.parseInt(upper) * 2)));
        this.lower = Integer.parseInt(lower);
        this.upper = Integer.parseInt(upper);
        this.date = date;
    }


    @Override
    public String get() throws KnownException, JsonProcessingException {
        List<CompanyStockEntry> entries = getRowData();

        if(entries.size() < ((lower* 2 + 1) + 2 * upper + 1)){
            Date starting = DateUtils.addDate(DateUtils.stringToDateYMD(date),-2*lower -1);
            CompanyStockEntry[] temp = entries.toArray(new CompanyStockEntry[entries.size()]);
            entries = new ArrayList<>();

            for(int i = 0 ; i <((lower* 2 + 1) + 2 * upper + 1) ; i ++){
                Date curr = DateUtils.addDate(starting,i);
                CompanyStockEntry lastEntry = null;
                for(int j = 1 ; j < temp.length ; j ++){
                    CompanyStockEntry e2 = temp[j];
                    if(DateUtils.isOnTheSameDate(DateUtils.stringToDateYMD(e2.getDate()),curr)){
                        lastEntry = e2;
                        break;
                    }else if(DateUtils.isAfter(DateUtils.stringToDateYMD(e2.getDate()),curr)){
                        lastEntry = temp[j-1];
                        break;
                    }
                }
                if(lastEntry == null){
                    continue;
                }
                entries.add(new CompanyStockEntry(DateUtils.dateToStringYMD(curr),lastEntry));
            }
        }

        List<CompanyReturnDateValue> dateValues = new ArrayList<>();
        for(int i = 1 ; i < entries.size() ; i ++){
            CompanyStockEntry prev =  entries.get(i-1);
            CompanyStockEntry curr = entries.get(i);
            double totalReturn = 0;
            for(CompanyReturnDateValue dateValue : dateValues){
                totalReturn += dateValue.getReturn();
            }
            totalReturn +=(curr.getAdjClose() - prev.getAdjClose())/prev.getAdjClose();

            dateValues.add(new CompanyReturnDateValue(curr.getDate(),
                    (curr.getAdjClose() - prev.getAdjClose())/prev.getAdjClose(),
                    totalReturn/i,
                    totalReturn ));
        }

        ObjectMapper mapper = new ObjectMapper();
        List<CompanyData> companyDataList = new ArrayList<>();
        try {
            companyDataList.add(new CompanyData("CompanyReturns"
                    , Arrays.copyOfRange(dateValues.toArray(new CompanyReturnDateValue[dateValues.size()]), lower, 2 * upper + lower + 1), getInstrumentID()));
        }catch (Exception e){
            System.out.println("Error at array length here");
            System.out.println("L:"+lower+ "  U: "+upper+" Length: " + dateValues.size());

        }
        return mapper.writeValueAsString(companyDataList.toArray(new CompanyData[companyDataList.size()]));
    }

}
