package com.teamrocket.seng3011.api.categories;

import com.teamrocket.seng3011.api.HaveID;

/**
 * Created by JHXSMatthew on 17/3/17.
 *
 *
 * TODO: need someone recheck if this is correct, so messy XML there is
 */
public enum RetailCategory implements HaveID {
    Total(20),
    Food(41),
    HousholdGood(42),
    ClothingFootwareAndPersonalAccessory(43),
    DepartmentStores(44),
    CafesResturantsAndTakeawayFood(46),
    Other(45);

    private final int id;

    RetailCategory(int id){
        this.id = id;
    }

    public int getId(){
        return this.id;
    }

}
