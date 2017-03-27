package com.teamrocket.seng3011.api.exceptions;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.results.ResultObject;

/**
 * Created by JHXSMatthew on 24/03/2017.
 *
 */
public class Error implements ResultObject {
    @JsonProperty("code")
    private int id;
    @JsonProperty("message")
    private String message;

    public Error(int id, String message){
        this.id = id;
        this.message = message;
    }
}
