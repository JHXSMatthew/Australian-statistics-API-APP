package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 29/03/2017.
 */
public class NoDataAvailableException extends KnownException {
    public NoDataAvailableException(String message) {
        super(message, false);
    }
}
