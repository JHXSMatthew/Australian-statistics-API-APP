package com.teamrocket.seng3011.analysisPlatform;

import com.teamrocket.seng3011.analysisPlatform.models.Company;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;
import com.teamrocket.seng3011.api.exceptions.CannotParseJSONException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;
import org.springframework.web.bind.annotation.*;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
@RestController
@CrossOrigin
//TODO: test usage, remove CrossOrigin  after testing.
public class AnalysisPlatformController {

    @RequestMapping(value = "app/category/set", produces = "application/json")
    public String onCategoryQuerySet(@RequestBody CategoryQuery query) throws Exception {
        return query.set();
    }

    @RequestMapping(value = "app/category/get", produces = "application/json")
    public String onCategoryQueryGet(@RequestBody CategoryQuery query) throws Exception {
        return query.get();
    }


    //Should be a function handles fetch each categories/states/area here instead of hard coding in the view.
    // but I am lazy (no)
    public String onInfoFetch(){
        return "yes,string";
    }
}
