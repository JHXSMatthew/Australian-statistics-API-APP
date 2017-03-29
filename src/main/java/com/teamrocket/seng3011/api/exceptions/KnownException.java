package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 29/3/17.
 */
public class KnownException extends Exception {

    private boolean pretty = false;

    public KnownException(String message , boolean pretty){
        super(message);
        this.pretty = pretty;
    }

    public void setPretty(boolean pretty){
        this.pretty = pretty;
    }
}
