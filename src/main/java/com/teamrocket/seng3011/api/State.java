package com.teamrocket.seng3011.api;

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
    NT(7),  //Northern Territory TODO: this is not in spec, why ?
    ACT(8); //Australian Capital Territory

    private int id;

    State(int id){
        this.id = id;
    }

    public int getId(){
        return this.id;
    }


}

