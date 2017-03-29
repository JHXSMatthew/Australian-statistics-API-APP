package com.teamrocket.seng3011.homePage;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;


/**
 * Created by JHXSMatthew on 13/03/2017.
 *
 */
@RestController
public class HomePageController {

    @RequestMapping(value = "/dev", method = RequestMethod.GET)
    public ModelAndView greeting(ModelAndView model, HttpServletRequest request) {
        String test = "t";
        model.addObject("test",test);

        return model;
    }
}
