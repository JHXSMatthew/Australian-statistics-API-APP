package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataEntryRetail;
import com.teamrocket.seng3011.api.results.ResultObject;

import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataRetail implements ResultObject{
    @JsonProperty("MonthlyRetailData")
    private MonthlyDataEntryRetail[] entries;
    @JsonIgnore
    private List<MonthlyDataEntryRetail> entryList;

    public MonthlyDataRetail(MonthlyDataEntryRetail[] entries) {
        this.entries = entries;
    }

    public MonthlyDataRetail() {

    }

    public MonthlyDataEntryRetail[] getEntries() {
        return entries;
    }

    public void setEntries(MonthlyDataEntryRetail[] entries) {
        this.entries = entries;
    }

    public List<MonthlyDataEntryRetail> getEntryList() {
        return entryList;
    }

    public void setEntryList(List<MonthlyDataEntryRetail> entryList) {
        this.entryList = entryList;
    }
}
