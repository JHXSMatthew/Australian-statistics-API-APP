package com.teamrocket.seng3011.api.exceptions;

import java.io.IOException;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class CannotFetchDataException extends IOException {

    private String str;

    public CannotFetchDataException(String str) {
        super(str);
        this.str = str;

    }

    public String getErrorMessage() {
        return str;
    }

}
