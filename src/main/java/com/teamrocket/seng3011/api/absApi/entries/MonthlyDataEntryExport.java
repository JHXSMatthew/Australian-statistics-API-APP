package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataEntryExport extends MonthlyDataEntry {
    @JsonProperty("Commodity")
    private String commodity;


    public MonthlyDataEntryExport(String commodity, RegionalDataEntry[] entries) {
        super(entries);
        this.commodity = commodity;
    }

    public MonthlyDataEntryExport(String commodity) {
        this.commodity = commodity;
    }

    public String getCommodity() {
        return commodity;
    }
}
