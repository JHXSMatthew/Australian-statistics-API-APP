package com.teamrocket.seng3011.analysisPlatform.models;


import com.teamrocket.seng3011.api.absApi.entries.EntryType;

/**
 * Created by JHXSMatthew on 20/05/2017.
 */
public class CategoryCompanyRelation {

    private EntryType category;
    private Company[] companies;


    public CategoryCompanyRelation(EntryType category,Company[] companies){
        this.category = category;
        this.companies = companies;
    }

    public String getCategory() {
        return category.getTypeString();
    }

    public void setCategory(EntryType category) {
        this.category = category;
    }

    public Company[] getCompanies() {
        return companies;
    }

    public void setCompanies(Company[] companies) {
        this.companies = companies;
    }
}
