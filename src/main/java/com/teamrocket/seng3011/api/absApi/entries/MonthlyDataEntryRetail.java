package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataEntryRetail extends MonthlyDataEntry {

    @JsonProperty("RetailIndustry")
    private String industry;


    public MonthlyDataEntryRetail(String industry, RegionalDataEntry[] entries) {
        super(entries);
        this.industry = industry;
    }

    public MonthlyDataEntryRetail(String industry) {
        this.industry = industry;
    }

    public String getIndustry() {
        return industry;
    }
}
