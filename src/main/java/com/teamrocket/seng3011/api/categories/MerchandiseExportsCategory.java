package com.teamrocket.seng3011.api.categories;

import com.teamrocket.seng3011.api.HaveID;

/**
 * Created by JHXSMatthew on 17/3/17.
 *
 * TODO: fill those ids.
 */
public enum MerchandiseExportsCategory implements HaveID {
    Total(-1),
    FoodAndLiveAnimals(0),
    BeveragesAndTobacco(1),
    CrudMaterialAndInedible(2),
    MineralFuelLubricentAndRelatedMaterial(3),
    AnimalAndVegitableOilFatAndWaxes(4),
    ChemicalsAndRelatedProducts(5),
    ManufacutedGoods(6),
    MachineryAndTransportEquipments(7),
    OtheranucacturedArticles(8), //TODO: what is this
    Unclassified(9); //TODO: confirm if this is correct.

    private final int id;

    MerchandiseExportsCategory(int id ){
        this.id = id;
    }

    public int getId(){
        return id;
    }


}
