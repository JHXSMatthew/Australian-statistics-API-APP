package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 17/03/2017.
 */
public class CannotParseCategoryException extends KnownException {



    public CannotParseCategoryException(String s) {
        super("cannot not parse the category " + s,false);
    }


}
