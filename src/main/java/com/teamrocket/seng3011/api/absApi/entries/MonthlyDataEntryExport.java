package com.teamrocket.seng3011.api.absApi.entries;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamrocket.seng3011.api.categories.MerchandiseExportsCategory;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class MonthlyDataEntryExport extends MonthlyDataEntry {
    @JsonProperty("Commodity")
    private MerchandiseExportsCategory commodity;


    public MonthlyDataEntryExport(MerchandiseExportsCategory commodity, RegionalDataEntry[] entries) {
        super(entries);
        this.commodity = commodity;
    }

    public MonthlyDataEntryExport(MerchandiseExportsCategory commodity) {
        this.commodity = commodity;
    }

    public MerchandiseExportsCategory getCommodity() {
        return commodity;
    }
}
