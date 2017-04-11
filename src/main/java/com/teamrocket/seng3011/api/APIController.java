package com.teamrocket.seng3011.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.teamrocket.seng3011.api.absApi.APIRequest;
import com.teamrocket.seng3011.api.absApi.EntryFactory;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import com.teamrocket.seng3011.api.absApi.entries.MonthlyDataEntry;
import com.teamrocket.seng3011.api.exceptions.*;
import com.teamrocket.seng3011.api.results.Header;
import com.teamrocket.seng3011.api.results.ResultContainer;
import com.teamrocket.seng3011.api.results.ResultObject;
import com.teamrocket.seng3011.api.results.Status;
import com.teamrocket.seng3011.utils.DateUtils;
import com.teamrocket.seng3011.utils.StringUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.Objects;

/**
 * Created by JHXSMatthew on 17/3/17.
 * <p>
 * http://127.0.0.1:8080/api?StatisticsArea=Retail&State=NSW&Category=ClothingFootwareAndPersonalAccessory,DepartmentStores&startDate=2013-01-01&&endDate=2014-01-01
 * <p>
 * http://127.0.0.1:8080/api?StatisticsArea=MerchandiseExports&State=NSW,SA&Category=CrudMaterialAndInedible,MineralFuelLubricentAndRelatedMaterial&startDate=2013-01-01&&endDate=2014-01-01
 */
@RestController
@CrossOrigin
public class APIController {

    private final static boolean DEBUG = true;

    public static void debugPrint(String str) {
        if (DEBUG) System.err.println(str);
    }


    @RequestMapping(value = "/api",method = RequestMethod.POST, produces = "application/json")
    public String statisticsPOST(HttpServletResponse response,WebRequest r,HttpEntity<String> requestEntity) throws IOException, ParseException, KnownException, ExceptionWrapper {
        ObjectMapper mapper = new ObjectMapper();
        ClientRequestContainer container = mapper.readValue(requestEntity.getBody(),ClientRequestContainer.class);
        return statistics(response,r,
                container.isPretty(),
                container.getArea(),
                container.getStateRaw(),
                container.getCategory(),
                container.getStartDate(),
                container.getEndDate());
    }

    @RequestMapping(value = "/api", method = RequestMethod.GET, produces = "application/json")
    public String statistics(HttpServletResponse response,
                           WebRequest r,
                           @RequestParam(value = "pretty", required = false) boolean pretty,
                           @RequestParam(value = "StatisticsArea") String area,
                           @RequestParam(value = "State") String[] stateRaw,
                           @RequestParam(value = "Category") String[] category,
                           @RequestParam(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                           @RequestParam(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) throws ParseException, IOException, DateInvalidException, KnownException, ExceptionWrapper {

        String parameters = StringUtils.mapToString(r.getParameterMap());
        String returnValue = null;
        if (endDate.before(startDate))
            throw new DateInvalidException("Date " + DateUtils.dateToStringYMD(startDate) + " is after " + DateUtils.dateToStringYMD(endDate));

        try {
            Date log_starting = Calendar.getInstance().getTime();
            debugPrint("---- Request received! ----");
            State[] state = parseState(stateRaw);
            EntryType entryType = EntryType.parseType(area);
            APIRequest request = new APIRequest(entryType);
            Object obj = EntryFactory.getFactory().assemblyOutput(
                    (MonthlyDataEntry[]) request.setState(state)
                            .setCategories(parseCategory(category, area))
                            .setDate(startDate, endDate)
                            .fetch().parse(), entryType
            );
            String trace = LogManager.getInstance().log(parameters, log_starting, Calendar.getInstance().getTime());
            ResultContainer container = new ResultContainer(new Header(Status.success,trace), (ResultObject) obj);
            ObjectMapper mapper = new ObjectMapper();
            if (pretty)
                mapper.enable(SerializationFeature.INDENT_OUTPUT);
            returnValue =  mapper.writeValueAsString(container);
            debugPrint("---- Request done! ----");
            debugPrint("  ");
        } catch (Exception e) {
            String trace = LogManager.getInstance().log(parameters, e.getMessage(), e.getStackTrace()[0].toString());
            ExceptionWrapper wrapper = new ExceptionWrapper(e,trace,pretty);

            throw wrapper;
        }
        return returnValue;
    }


    public void handle(ClientRequestContainer container){

    }




    private State[] parseState(String[] stateRaw) throws CannotParseStateException {
        State[] states = new State[stateRaw.length];
        for (int i = 0; i < stateRaw.length; i++) {
            String s = stateRaw[i];
            try {
                states[i] = State.valueOf(s);
            } catch (Exception e) {
                throw new CannotParseStateException(s);
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
            throw new CannotParseCategoryException(Arrays.toString(category));
        }
        if (category.length != returnValue.length) {
            throw new CannotParseCategoryException(Arrays.toString(category));
        }
        return returnValue;
    }

}
