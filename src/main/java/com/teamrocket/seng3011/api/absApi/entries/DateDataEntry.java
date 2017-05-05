package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.utils.DateUtils;

import java.util.Calendar;
import java.util.Date;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public abstract class DateDataEntry {
    @JsonProperty("Date")
    private String date;

    public DateDataEntry(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, 1);
        calendar.add(Calendar.DATE, -1);
        this.date = DateUtils.dateToStringYMD(calendar.getTime());
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @JsonIgnore
    public abstract String getData();
}
