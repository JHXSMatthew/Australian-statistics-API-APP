package com.teamrocket.seng3011.api.categories;

import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;

/**
 * Created by JHXSMatthew on 17/3/17.
 * <p>
 *
 * <p>
 */
public enum RetailCategory implements HaveID {
    Total(20),
    Food(41),
    HouseholdGood(42),
    ClothingFootwareAndPersonalAccessory(43),
    DepartmentStores(44),
    CafesResturantsAndTakeawayFood(46),
    Other(45);

    private final int id;

    RetailCategory(int id) {
        this.id = id;
    }

    public static RetailCategory parseCategory(int id) throws CannotParseCategoryException {
        for (RetailCategory s : values()) {
            if (s.getId() == id) {
                return s;
            }
        }
        throw new CannotParseCategoryException("state id unknown :" + id);
    }

    public static RetailCategory parseCategory(String id_str) throws CannotParseCategoryException {
        int id = -999;
        try {
            id = Integer.parseInt(id_str);
        } catch (Exception e) {
            throw new CannotParseCategoryException("category id unknown :" + id);
        }
        for (RetailCategory s : values()) {
            if (s.getId() == id) {
                return s;
            }
        }
        throw new CannotParseCategoryException("state id unknown :" + id);
    }

    public int getId() {
        return this.id;
    }
}
