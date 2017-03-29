package com.teamrocket.seng3011;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;


/**
 * Created by JHXSMatthew on 13/03/2017.
 */
@Controller
public class HomePageController {

    @RequestMapping("/")
    public String page(Map<String, Object> model) {

        return "home";
    }


    @RequestMapping("/getting-started")
    public String start(Map<String, Object> model) {

        return "getting-started";
    }

    @RequestMapping("/about")
    public String about(Map<String, Object> model) {

        return "about";
    }
}
