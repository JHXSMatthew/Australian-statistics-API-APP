package com.teamrocket.seng3011.api.results;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 24/03/2017.
 */
public class Header {

    @JsonProperty("status")
    private Status status = null;
    @JsonProperty("requestNumber")
    private String requestNumber = null;
    @JsonProperty("execution_Time")
    private long execution = -1;

    public Header(Status status,String requestNumber) {
        this.status = status;
        this.requestNumber = requestNumber;
    }

    public Header setExecution(long execution){
        this.execution = execution;
        return this;
    }


}
