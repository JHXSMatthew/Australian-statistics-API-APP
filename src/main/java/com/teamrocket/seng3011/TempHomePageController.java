package com.teamrocket.seng3011;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by JHXSMatthew on 13/03/2017.
 */
@RestController
public class TempHomePageController {

    @RequestMapping("/")
    public String greeting() {
        String s = null;
        return  s;
    }
}
