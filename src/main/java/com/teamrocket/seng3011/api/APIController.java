package com.teamrocket.seng3011.api;

import com.teamrocket.seng3011.api.categories.RetailCategory;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.*;

/**
 * Created by JHXSMatthew on 17/3/17.
 *
 * http://127.0.0.1:8080/api?StatisticsArea=Retail&State=NSW&Category=ClothingFootwareAndPersonalAccessory,DepartmentStores&startDate=2013-01-01&&endDate=2014-01-01
 */
@RestController
public class APIController {


    @RequestMapping("/api")
    public String statistics(@RequestParam(value = "StatisticsArea") String area,
                             @RequestParam(value = "State") State state,
                             @RequestParam(value = "Category") String[] category,
                             @RequestParam(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd")Date startDate,
                             @RequestParam(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd")Date endDate) throws CannotParseCategoryException {
        HaveID[] categories = null;
        categories = parseCategory(category,area);

        RestTemplate restTemplate = new RestTemplate();




        return "sample";
    }

    private HaveID[] parseCategory(String[] category,String area) throws CannotParseCategoryException{
        HaveID[] returnValue = null;
        try {
            Class<? extends Enum> clazz = (Class<? extends Enum>)
                    Class.forName("com.teamrocket.seng3011.api.categories."+area+"Category");
            HaveID[] enums = (HaveID[]) clazz.getEnumConstants();

            returnValue =  Arrays.stream(category).
                   map(c->
                           Arrays.stream(enums)
                                   .filter(e->e.toString().equals(c))
                                   .findFirst()
                                   .orElse(null)
                   ).filter(Objects::nonNull).toArray(HaveID[]::new); //TODO: discus should we ignore wrong category there or what

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new CannotParseCategoryException("cannot find category type!",0);
        }
        return returnValue;
    }


}
