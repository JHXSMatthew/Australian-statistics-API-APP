package com.teamrocket.seng3011.api;

import com.teamrocket.seng3011.api.exceptions.CannotParseStateException;

import java.util.Arrays;

/**
 * Created by JHXSMatthew on 17/3/17.
 */
public enum State implements HaveID {
    AUS(0), //Australia
    NSW(1), //New South Wales
    VIC(2), //Victoria
    QLD(3), //Queensland
    SA(4),  //South Australia
    WA(5),  //Western Australia
    TAS(6), //Tasmania
    NT(7),  //Northern Territory
    ACT(8); //Australian Capital Territory

    private int id;

    State(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public static State parseState(int id) throws CannotParseStateException {
        for(State s : values()){
            if(s.getId() == id){
                return s;
            }
        }
        throw new CannotParseStateException("state id unknown :" + id);
    }


    public static State parseState(String id_str) throws CannotParseStateException {
        int id = -999;
        if(id_str.equals("-")){
            // this is for export AUS parsing, bad practise.
            id = 0;
        }else {
            try {
                id = Integer.parseInt(id_str);
            } catch (Exception e) {
                throw new CannotParseStateException(" id unknown :" + id_str);
            }
        }
        for(State s : values()){
            if(s.getId() == id){
                return s;
            }
        }
        throw new CannotParseStateException(" id unknown :" + id_str);
    }
}

