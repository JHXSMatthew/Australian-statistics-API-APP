package com.teamrocket.seng3011.analysisPlatform.models;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class DateValue {

    private String date;
    private double value;

    public DateValue(String date, double value){
        this.date = date;
        this.value = value;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }
}
