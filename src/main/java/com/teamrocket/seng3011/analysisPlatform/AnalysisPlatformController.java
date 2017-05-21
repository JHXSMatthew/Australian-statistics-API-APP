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
public class AnalysisPlatformController {

    @RequestMapping(value = "app/category", produces = "application/json")
    public String onCategoryQuery(@RequestParam(value = "action") String action ,
                                @RequestParam(value = "area") String area ,
                                @RequestParam(value = "category", required = false) String[] category,
                                @RequestParam(value = "company", required = false) Company[] company
                                ) throws Exception {
        CategoryQuery query = new CategoryQuery(area,category,company);
        if(action.toLowerCase().equals("get")){
            return query.get();
        }else if(action.toLowerCase().equals("set")) {
            return query.set();
        }
        throw new CannotParseJSONException("error input action");
    }

    //Should be a function handles fetch each categories/states/area here instead of hard coding in the view.
    // but I am lazy (no)
    public String onInfoFetch(){
        return "yes,string";
    }
}
