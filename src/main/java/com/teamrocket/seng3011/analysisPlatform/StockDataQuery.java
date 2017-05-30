package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.CompanyData;
import com.teamrocket.seng3011.analysisPlatform.models.CompanyStockEntry;
import com.teamrocket.seng3011.api.exceptions.KnownException;
import com.teamrocket.seng3011.utils.DateUtils;

import java.io.IOException;
import java.util.Calendar;

/**
 * Created by JHXSMatthew on 31/05/2017.
 */
public class StockDataQuery extends IndicatorQuery{

    @JsonCreator
    public StockDataQuery(@JsonProperty("instrumentID") String companyID) throws IOException, KnownException {
        super(companyID, "2010-01-01", DateUtils.dateToStringYMD(Calendar.getInstance().getTime()));
    }

    @Override
    public String get() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(getRowData().toArray(new CompanyStockEntry[getRowData().size()]));
    }

}
