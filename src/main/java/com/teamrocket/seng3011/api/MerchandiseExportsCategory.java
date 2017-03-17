package com.teamrocket.seng3011.api;

/**
 * Created by JHXSMatthew on 17/3/17.
 *
 * TODO: fill those ids.
 */
public enum MerchandiseExportsCategory {
    Total(-1),
    FoodAndLiveAnimals(-1),
    BeveragesAndTobacco(-1),
    CrudMaterialAndInedible(-1),
    MineralFuelLubricentAndRelatedMaterial(-1),
    AnimalAndVegitableOilFatAndWaxes(-1),
    ChemicalsAndRelatedProducts(-1),
    ManufacutedGoods(-1),
    MachineryAndTransportEquipments(-1),
    OtheranucacturedArticles(-1),
    Unclassified(-1);

    private final int id;

    MerchandiseExportsCategory(int id ){
        this.id = id;
    }

    public int getId(){
        return id;
    }


}
