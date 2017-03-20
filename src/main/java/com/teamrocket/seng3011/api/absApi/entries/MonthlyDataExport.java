package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataEntryExport;

import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataExport {
    @JsonProperty("MonthlyCommodityExportData")
    private MonthlyDataEntryExport[] entries;
    @JsonIgnore
    private List<MonthlyDataEntryExport> entryList;

    public MonthlyDataExport(MonthlyDataEntryExport[] entries) {
        this.entries = entries;
    }

    public MonthlyDataExport() {

    }


    public MonthlyDataEntryExport[] getEntries() {
        return entries;
    }

    public void setEntries(MonthlyDataEntryExport[] entries) {
        this.entries = entries;
    }

    public List<MonthlyDataEntryExport> getEntryList() {
        return entryList;
    }

    public void setEntryList(List<MonthlyDataEntryExport> entryList) {
        this.entryList = entryList;
    }
}
