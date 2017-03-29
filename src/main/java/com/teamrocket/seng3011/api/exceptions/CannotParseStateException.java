package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 20/03/2017.
 */
public class CannotParseStateException extends KnownException {

    public CannotParseStateException(String s) {
        super("cannot parse the state " + s, false);
    }
}
