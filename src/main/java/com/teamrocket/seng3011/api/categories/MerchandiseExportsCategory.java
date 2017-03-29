package com.teamrocket.seng3011.api.categories;

import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;

/**
 * Created by JHXSMatthew on 17/3/17.
 * <p>
 */
public enum MerchandiseExportsCategory implements HaveID {
    Total(-1),
    FoodAndLiveAnimals(0),
    BeveragesAndTobacco(1),
    CrudMaterialAndInedible(2),
    MineralFuelLubricentAndRelatedMaterial(3),
    AnimalAndVegitableOilFatAndWaxes(4),
    ChemicalsAndRelatedProducts(5),
    ManufacturedGoods(6),
    MachineryAndTransportEquipments(7),
    OtherManufacturedArticles(8),
    Unclassified(9);

    private final int id;

    MerchandiseExportsCategory(int id) {
        this.id = id;
    }

    public static MerchandiseExportsCategory parseCategory(int id) throws CannotParseCategoryException {
        for (MerchandiseExportsCategory s : values()) {
            if (s.getId() == id) {
                return s;
            }
        }
        throw new CannotParseCategoryException("state id unknown :" + id);
    }

    public static MerchandiseExportsCategory parseCategory(String id_str) throws CannotParseCategoryException {
        int id = -999;
        try {
            id = Integer.parseInt(id_str);
        } catch (Exception e) {
            throw new CannotParseCategoryException("category id unknown :" + id);
        }
        for (MerchandiseExportsCategory s : values()) {
            if (s.getId() == id) {
                return s;
            }
        }
        throw new CannotParseCategoryException("state id unknown :" + id);
    }

    public int getId() {
        return id;
    }

}
