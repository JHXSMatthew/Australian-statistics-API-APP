package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class DateDataEntryExport extends DateDataEntry {

    @JsonProperty("Value")
    private double value;

    public DateDataEntryExport(Date date, double value) {
        super(date);
        this.value = value;
    }


    public double getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    @Override
    public String getData() {
        return String.valueOf(value);
    }
}
