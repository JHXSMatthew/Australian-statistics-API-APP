package com.teamrocket.seng3011;

/**
 * Created by JHXSMatthew on 13/03/2017.
 * from Spring tutorial
 *
 */
public class Greeting {

    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
