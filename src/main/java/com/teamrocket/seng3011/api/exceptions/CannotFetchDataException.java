package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class CannotFetchDataException extends Exception {

    private String str;

    public CannotFetchDataException(String str) {
        this.str = str;
    }

    public String getErrorMessage() {
        return str;
    }

}
