package com.teamrocket.seng3011.analysisPlatform.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class CompanyReturnDateValue {

    @JsonProperty("Date")
    private String date;
    @JsonProperty("AV_Return")
    private double ave;
    @JsonProperty("CM_Return")
    private double cm;
    @JsonProperty("Return")
    private double r;


    public CompanyReturnDateValue(String date, double r,double average, double cumulative){
        this.date = date;
        this.ave = average;
        this.cm = cumulative;
        this.r = r;
    }

    @JsonIgnore
    public double getReturn(){
        return r;
    }



}
