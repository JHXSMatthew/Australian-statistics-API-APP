package com.teamrocket.seng3011.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by JHXSMatthew on 17/3/17.
 */
@RestController
public class APIController {


    @RequestMapping("/api")
    public String statistics(){
        return "test";
    }
}
