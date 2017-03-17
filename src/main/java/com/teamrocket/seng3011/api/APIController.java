package com.teamrocket.seng3011.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by JHXSMatthew on 17/3/17.
 */
@RestController
public class APIController {


    @RequestMapping("/api")
    public String statistics(@RequestParam String StatisticsArea,
                             @RequestParam State State, //TODO:convener
                             @RequestParam String[] Category,
                             @RequestParam String startDate,
                             @RequestParam String endDate){
        return "sample";
    }
}
