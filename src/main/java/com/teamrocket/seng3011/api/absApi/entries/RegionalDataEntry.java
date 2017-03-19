package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.State;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class RegionalDataEntry {
    @JsonProperty("State")
    private State state;
    @JsonProperty("Data")
    private DateDataEntry entry[];
    @JsonIgnore
    private List<DateDataEntry> entryList;

    public RegionalDataEntry(State state){
        this.state = state;
    }
    public RegionalDataEntry(State state,DateDataEntry[] entry){
        this.state = state;
        this.entry = entry;
    }


    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public DateDataEntry[] getEntry() {
        if(entry == null)
            pack();
        return entry;
    }

    public void setEntry(DateDataEntry[] entry) {
        this.entry = entry;
    }

    public void addEntry(DateDataEntry entry){
        if(entryList == null){
            entryList = new ArrayList<>();
        }
        entryList.add(entry);
    }

    public void pack(){
        entry = entryList.toArray(new DateDataEntry[entryList.size()]);
    }
}
