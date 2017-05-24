package com.teamrocket.seng3011.analysisPlatform.models;


import com.teamrocket.seng3011.api.HaveID;

/**
 * Created by JHXSMatthew on 20/05/2017.
 */
public class CategoryCompanyRelation {

    private HaveID category;
    private Company[] companies;


    public CategoryCompanyRelation(HaveID category,Company[] companies){
        this.category = category;
        this.companies = companies;
    }

    public String getCategory() {
        return category.getName();
    }

    public void setCategory(HaveID category) {
        this.category = category;
    }

    public Company[] getCompanies() {
        return companies;
    }

    public void setCompanies(Company[] companies) {
        this.companies = companies;
    }
}
