package com.teamrocket.seng3011.analysisPlatform;

import com.teamrocket.seng3011.analysisPlatform.models.Company;
import org.springframework.web.bind.annotation.*;

/**
 * Created by JHXSMatthew on 17/05/2017.
 */
@RestController
public class AnalysisPlatformController {

    @RequestMapping(value = "app/category",method = RequestMethod.POST, produces = "application/json")
    public void onCategoryQuery(@RequestParam(value = "action") String action ,
                                @RequestParam(value = "area") String area ,
                                @RequestParam(value = "category", required = false) String[] category,
                                @RequestParam(value = "company", required = false) Company[] company
                                ){
        CategoryQuery query = new CategoryQuery(area,category,company);

        if(action.toLowerCase().equals("get")){
            if(category != null){

            }else if(company != null){

            }else{

            }
        }else if(action.toLowerCase().equals("set")){
            //check pre-condition
            if(category != null && company != null){

            }
        }


    }

}
