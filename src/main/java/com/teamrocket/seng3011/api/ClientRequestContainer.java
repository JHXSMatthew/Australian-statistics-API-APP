package com.teamrocket.seng3011.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;

/**
 * Created by JHXSMatthew on 11/04/2017.
 */
public class ClientRequestContainer {
    @JsonProperty("pretty")
    private boolean pretty;
    @JsonProperty("StatisticsArea")
    private String area;
    @JsonProperty("State")
    private String stateRaw;
    @JsonProperty("Category")
    private String category;
    @JsonProperty("startDate")
    private Date startDate;
    @JsonProperty("endDate")
    private Date endDate;




    public boolean isPretty() {
        return pretty;
    }

    public void setPretty(boolean pretty) {
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
