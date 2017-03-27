package com.teamrocket.seng3011.api.results;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 24/03/2017.
 */
public class Header {

    @JsonProperty("status")
    private Status status = null;


    public Header (Status status){
        this.status = status;
    }



}
