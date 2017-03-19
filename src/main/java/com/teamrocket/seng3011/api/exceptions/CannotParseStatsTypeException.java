package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class CannotParseStatsTypeException extends Exception {

    private String str;

    public CannotParseStatsTypeException(String str){
        this.str = str;
    }

    public String getErrorName(){
        return str;
    }

}
