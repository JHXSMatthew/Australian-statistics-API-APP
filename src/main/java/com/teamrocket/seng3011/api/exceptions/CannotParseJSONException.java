package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 20/03/2017.
 */
public class CannotParseJSONException extends KnownException {

    public CannotParseJSONException(String s) {
        super(s, false);
    }
}
