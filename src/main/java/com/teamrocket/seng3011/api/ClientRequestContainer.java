package com.teamrocket.seng3011.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.exceptions.KnownException;
import com.teamrocket.seng3011.utils.DateUtils;

import java.util.Date;

/**
 * Created by JHXSMatthew on 11/04/2017.
 */
public class ClientRequestContainer {
    @JsonProperty("pretty")
    private String pretty;
    @JsonProperty("StatisticsArea")
    private String area;
    @JsonProperty("State")
    private String stateRaw;
    @JsonProperty("Category")
    private String category;
    @JsonProperty("startDate")
    private String startDate;
    @JsonProperty("endDate")
    private String endDate;




    public boolean isPretty() {
        try {
            return Boolean.parseBoolean(pretty);
        }catch (Exception e){
            return false;
        }
    }

    public void setPretty(String pretty) {
        this.pretty = pretty;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String[] getStateRaw() {
        return stateRaw.split(",");
    }

    public void setStateRaw(String stateRaw) {
        this.stateRaw = stateRaw;
    }

    public String[] getCategory() {
        return category.split(",");
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getStartDate() throws KnownException {
        return DateUtils.stringToDateYMD(startDate);
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() throws KnownException {
        return DateUtils.stringToDateYMD(endDate);
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
