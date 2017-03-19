package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public abstract class MonthlyDataEntry {

    @JsonProperty("RegionalData")
    private RegionalDataEntry[] entries;
    @JsonIgnore
    private List<RegionalDataEntry> entryList;


    public MonthlyDataEntry(RegionalDataEntry[] entries){
        this.entries = entries;
    }

    public MonthlyDataEntry(){

    }

    public void addRegionalDataEntry(RegionalDataEntry entry){
        if(entryList == null){
            entryList = new ArrayList<>();
        }
        entryList.add(entry);
    }

    public RegionalDataEntry[] getEntries() {
        if(entries == null){
            entries = entryList.toArray(new RegionalDataEntry[entryList.size()]);
        }
        return entries;
    }

    public void setEntries(RegionalDataEntry[] entries) {
        this.entries = entries;
    }

    public List<RegionalDataEntry> getEntryList() {
        return entryList;
    }

    public void setEntryList(List<RegionalDataEntry> entryList) {
        this.entryList = entryList;
    }
}
