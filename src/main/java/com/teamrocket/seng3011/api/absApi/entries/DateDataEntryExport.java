package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class DateDataEntryExport extends DateDataEntry {

    @JsonProperty("Value")
    private float value;

    public DateDataEntryExport(Date date, float value) {
        super(date);
        this.value = value;
    }


    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }
}
