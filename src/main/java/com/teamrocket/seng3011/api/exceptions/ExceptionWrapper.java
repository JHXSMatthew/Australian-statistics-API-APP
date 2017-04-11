package com.teamrocket.seng3011.api.exceptions;

/**
 * Created by JHXSMatthew on 11/04/2017.
 */
public class ExceptionWrapper extends Exception{

    private final Exception e;
    private final String traceNumber;
    private final boolean pretty;

    public ExceptionWrapper(Exception e, String traceNumber, boolean pretty) {
        this.e = e;
        this.traceNumber = traceNumber;
        this.pretty = pretty;
    }

    public Exception getE() {
        return e;
    }

    public String getTraceNumber() {
        return traceNumber;
    }

    public boolean isPretty() {
        return pretty;
    }
}
