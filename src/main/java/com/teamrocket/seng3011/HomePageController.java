package com.teamrocket.seng3011;

import com.teamrocket.seng3011.api.LogManager;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;


/**
 * Created by JHXSMatthew on 13/03/2017.
 */
@Controller
public class HomePageController {
    /*
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
    */
}
