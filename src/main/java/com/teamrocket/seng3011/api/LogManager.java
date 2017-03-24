package com.teamrocket.seng3011.api;


/**
 * Created by JHXSMatthew on 17/03/2017.
 */
public class LogManager {
    private static LogManager manager;

    //TODO: finish log manager
    public LogManager(){

    }

    public LogManager getInstance(){
        if(manager == null){
            manager = new LogManager();
        }
        return manager;
    }
}
