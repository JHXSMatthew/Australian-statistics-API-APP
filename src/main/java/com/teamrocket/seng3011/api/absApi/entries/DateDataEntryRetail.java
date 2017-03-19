package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class DateDataEntryRetail extends DateDataEntry{

    @JsonProperty("Turnover")
    private float turnover;

    public DateDataEntryRetail(Date date,float turnover) {
        super(date);
        this.turnover = turnover;
    }

    public float getTurnover() {
        return turnover;
    }

    public void setTurnover(float turnover) {
        this.turnover = turnover;
    }
}
