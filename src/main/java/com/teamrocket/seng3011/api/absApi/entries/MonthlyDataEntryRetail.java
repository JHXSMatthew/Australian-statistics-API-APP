package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.categories.RetailCategory;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataEntryRetail extends MonthlyDataEntry {

    @JsonProperty("RetailIndustry")
    private RetailCategory industry;


    public MonthlyDataEntryRetail(RetailCategory industry, RegionalDataEntry[] entries) {
        super(entries);
        this.industry = industry;
    }

    public MonthlyDataEntryRetail(RetailCategory industry) {
        this.industry = industry;
    }

    public RetailCategory getIndustry() {
        return industry;
    }

    @Override
    public int getId() {
        return industry.getId();
    }
}
