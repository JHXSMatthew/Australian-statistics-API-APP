package com.teamrocket.seng3011.analysisPlatform.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
public class Company {

    private String name;
    private String instrumentId;

    @JsonCreator
    public Company(@JsonProperty("name") String name,
                   @JsonProperty("instrumentId") String instrumentId){
        this.name = name;
        this.instrumentId = instrumentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstrumentId() {
        return instrumentId;
    }

    public void setInstrumentId(String instrumentId) {
        this.instrumentId = instrumentId;
    }



}
