package com.teamrocket.seng3011.analysisPlatform.models;


import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class CompanyData {

    private String indicator;
    @JsonProperty("dateValues")
    private Object[] dateValues;
    private String instrumentID;

    public CompanyData(String indicator,Object[] dateValues,String instrumentID){
        this.indicator = indicator;
        this.dateValues = dateValues;
        this.instrumentID = instrumentID;
    }

    public String getIndicator() {
        return indicator;
    }

    public void setIndicator(String indicator) {
        this.indicator = indicator;
    }

    public void setDateValues(DateValue[] dateValues) {
        this.dateValues = dateValues;
    }

    public String getInstrumentID() {
        return instrumentID;
    }

    public void setInstrumentID(String instrumentID) {
        this.instrumentID = instrumentID;
    }
}
