package com.teamrocket.seng3011.analysisPlatform;

import com.teamrocket.seng3011.analysisPlatform.models.Company;
import com.teamrocket.seng3011.api.APIController;
import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
public class CategoryQuery {

    private String[] categories;
    private Company[] compnaies;


    public CategoryQuery(String area,String[] categories, Company[] companies) {
        this.categories = categories;
        this.compnaies = companies;css
    }

    public Company[] getCompanies(){

    }

    public HaveID getCategory(){


    }
}
