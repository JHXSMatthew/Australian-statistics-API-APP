package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 21/4/17.
 */
public class NoLogFileException extends KnownException {
    public NoLogFileException(String message) {
        super(message, false);
    }
}
