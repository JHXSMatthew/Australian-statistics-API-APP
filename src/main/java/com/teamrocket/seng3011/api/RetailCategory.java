package com.teamrocket.seng3011.api;

/**
 * Created by JHXSMatthew on 17/3/17.
 *
 *
 * TODO: fill those ids.
 */
public enum RetailCategory {
    Total(-1),
    Food(-1),
    HousholdGood(-1),
    ClothingFootwareAndPersonalAccessory(-1),
    DepartmentStores(-1),
    CafesResturantsAndTakeawayFood(-1),
    Other(-1);

    private final int id;

    RetailCategory(int id){
        this.id = id;
    }

    public int getId(){
        return this.id;
    }
}
