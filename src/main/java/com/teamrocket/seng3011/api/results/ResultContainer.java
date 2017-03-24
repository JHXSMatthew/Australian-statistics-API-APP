package com.teamrocket.seng3011.api.results;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by JHXSMatthew on 24/03/2017.
 */
public class ResultContainer {
    @JsonProperty("header")
    private Header header;
    @JsonProperty("data")
    private ResultObject object;

    public ResultContainer(Header header, ResultObject object){

    }
}
