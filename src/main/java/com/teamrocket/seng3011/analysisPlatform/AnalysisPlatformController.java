package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.teamrocket.seng3011.analysisPlatform.models.Company;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;
import com.teamrocket.seng3011.api.exceptions.CannotParseJSONException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;
import com.teamrocket.seng3011.api.exceptions.KnownException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
@RestController
@CrossOrigin
//TODO: test usage, remove CrossOrigin  after testing.
public class AnalysisPlatformController {

    @RequestMapping(value = "app/category/set", consumes = MediaType.APPLICATION_JSON_VALUE,produces = "application/json")
    public String onCategoryQuerySet(@RequestBody CategoryQuery query) throws Exception {
        return query.set();
    }

    @RequestMapping(value = "app/category/get", consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    public String onCategoryQueryGet(@RequestBody CategoryQuery query) throws Exception {
        return query.get();
    }

    @RequestMapping(value = "app/indicators/get", consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    public String onIndicatorQuery(@RequestBody IndicatorQuery query) throws JsonProcessingException, KnownException {
        return query.get();
    }

    @RequestMapping(value = "app/companyReturn/get", consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    public String onIndicatorQuery(@RequestBody CompanyReturnQuery query) throws JsonProcessingException, KnownException {
        return query.get();
    }

    @RequestMapping(value = "app/stockData/get", consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    public String onIndicatorQuery(@RequestBody StockDataQuery query) throws JsonProcessingException, KnownException {
        return query.get();
    }


    //Should be a function handles fetch each categories/states/area here instead of hard coding in the view.
    // but I am lazy (no)
    public String onInfoFetch(){
        return "yes,string";
    }
}
