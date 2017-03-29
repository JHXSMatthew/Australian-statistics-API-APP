package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class CannotParseStatsTypeException extends KnownException {


    public CannotParseStatsTypeException(String s) {
        super("cannot parse the statistics area "+s,false);
    }
}
