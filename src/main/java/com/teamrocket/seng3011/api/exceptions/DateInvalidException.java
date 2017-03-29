package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 29/3/17.
 */
public class DateInvalidException extends KnownException {

    public DateInvalidException(String message){
        super(message,false);
    }
}
