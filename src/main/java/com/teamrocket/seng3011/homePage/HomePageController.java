package com.teamrocket.seng3011.homePage;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;


/**
 * Created by JHXSMatthew on 13/03/2017.
 *
 */
@RestController
public class HomePageController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView page( HttpServletRequest request) {
        ModelAndView model = new ModelAndView();
        model.setViewName("index");
        return model;
    }
}
