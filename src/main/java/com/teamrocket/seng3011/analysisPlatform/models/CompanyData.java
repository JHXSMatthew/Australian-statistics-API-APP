package com.teamrocket.seng3011.analysisPlatform.models;


/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class CompanyData {

    private String indicator;
    private DateValue[] dateValues;

    public CompanyData(String indicator,DateValue[] dateValues){
        this.indicator = indicator;
        this.dateValues = dateValues;
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
}
