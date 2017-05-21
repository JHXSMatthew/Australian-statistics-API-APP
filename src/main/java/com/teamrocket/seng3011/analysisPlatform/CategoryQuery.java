package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.CategoryCompanyRelation;
import com.teamrocket.seng3011.analysisPlatform.models.Company;
import com.teamrocket.seng3011.api.APIController;
import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
public class CategoryQuery {

    private EntryType area;
    private HaveID[] categories;
    private Company companies;


    @JsonCreator
    public CategoryQuery(@JsonProperty("area")String area,
                         @JsonProperty("category")String categories,
                         @JsonProperty("company") Company companies) throws CannotParseStatsTypeException, CannotParseCategoryException {
        this.companies = companies;
        this.area = EntryType.parseType(area);
        System.out.println(categories);
        this.categories=  APIController.parseCategory(categories.split(","),area);
    }



    public String get() throws Exception {
        if(categories == null){
            throw new Exception("Category not set.");
        }
        List<CategoryCompanyRelation> relations = new ArrayList<>();
        for(HaveID id : categories){
            relations.add(SQLManager.getManager().getRelation(area,id));
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(relations.toArray(new CategoryCompanyRelation[relations.size()]));
    }

    public String set() throws Exception {
        if(categories == null || companies == null){
            throw new Exception("cannot set, input argument error!.");
        }
        return String.valueOf(SQLManager.getManager().setRelation(area,categories,companies));
    }
}
