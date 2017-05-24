package com.teamrocket.seng3011.analysisPlatform.models;


/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class CompanyData {

    private String indicator;
    private DateValue[] dateValues;
    private String instrumentID;

    public CompanyData(String indicator,DateValue[] dateValues,String instrumentID){
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

    public DateValue[] getDateValues() {
        return dateValues;
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
