package com.teamrocket.seng3011.api.exceptions;

import java.text.ParseException;

/**
 * Created by JHXSMatthew on 17/03/2017.
 */
public class CannotParseCategoryException extends ParseException {
    /**
     * Constructs a ParseException with the specified detail message and
     * offset.
     * A detail message is a String that describes this particular exception.
     *
     * @param s           the detail message
     * @param errorOffset the position where the error is found while parsing.
     */
    public CannotParseCategoryException(String s, int errorOffset) {
        super(s, errorOffset);
    }
}
