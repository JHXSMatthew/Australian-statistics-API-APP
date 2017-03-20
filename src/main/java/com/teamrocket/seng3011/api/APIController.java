package com.teamrocket.seng3011.api;

import com.teamrocket.seng3011.api.absApi.APIRequest;
import com.teamrocket.seng3011.api.absApi.EntryFactory;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataEntryRetail;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataExport;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataRetail;
import com.teamrocket.seng3011.api.exceptions.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.Arrays;
import java.util.Date;
import java.util.Objects;

/**
 * Created by JHXSMatthew on 17/3/17.
 * <p>
 * http://127.0.0.1:8080/api?StatisticsArea=Retail&State=NSW&Category=ClothingFootwareAndPersonalAccessory,DepartmentStores&startDate=2013-01-01&&endDate=2014-01-01
 * http://stat.data.abs.gov.au/sdmx-json/data/RT/1+2+3.2.41+42+43.10.M/all?startTime=2015-01&endTime=2015-12&dimensionAtObservation=allDimensions
 */
@RestController
public class APIController {


    @RequestMapping("/api")
    public MonthlyDataRetail statistics(@RequestParam(value = "StatisticsArea") String area,
                                        @RequestParam(value = "State") String[] stateRaw,
                                        @RequestParam(value = "Category") String[] category,
                                        @RequestParam(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                                        @RequestParam(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) throws ParseException, CannotFetchDataException {

        State[] state = parseState(stateRaw);
        APIRequest request = new APIRequest(area);
        MonthlyDataRetail obj = EntryFactory.getFactory().assemblyOutput((MonthlyDataEntryRetail[]) request.setState(state)
                .setCategories(parseCategory(category, area))
                .setDate(startDate, endDate)
                .fetch().parse());


        return obj;
    }

    private State[] parseState(String[] stateRaw) throws CannotParseStateException {
        State[] states = new State[stateRaw.length];
        for(int i = 0 ; i < stateRaw.length ; i ++){
            String s = stateRaw[i];
            try {
                states[i] = State.valueOf(s);
            }catch (Exception e) {
                throw new CannotParseStateException("State name: " + s + " not found!", 0);
            }
        }
        return states;
    }

    private HaveID[] parseCategory(String[] category, String area) throws CannotParseCategoryException {
        HaveID[] returnValue = null;
        try {
            Class<? extends Enum> clazz = (Class<? extends Enum>)
                    Class.forName("com.teamrocket.seng3011.api.categories." + area + "Category");
            HaveID[] enums = (HaveID[]) clazz.getEnumConstants();

            returnValue = Arrays.stream(category).
                    map(c ->
                            Arrays.stream(enums)
                                    .filter(e -> e.toString().equals(c))
                                    .findFirst()
                                    .orElse(null)
                    ).filter(Objects::nonNull).toArray(HaveID[]::new); //TODO: discus should we ignore wrong category there or what

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new CannotParseCategoryException("cannot find category type!", 0);
        }
        return returnValue;
    }


}
