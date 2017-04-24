package com.teamrocket.seng3011.api.exceptions;

import com.teamrocket.seng3011.api.results.Header;
import com.teamrocket.seng3011.api.results.ResultContainer;
import com.teamrocket.seng3011.api.results.Status;
import org.springframework.core.convert.ConversionFailedException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.Map;


/**
 * Created by JHXSMatthew on 18/03/2017.
 */
@ControllerAdvice
@Component
public class GlobalExceptionHandler {

    private Map<Class< ? extends Exception>,Integer> idMap;

    public GlobalExceptionHandler(){
        super();
        idMap = new HashMap<>();
        System.out.println("test, called.");
        register();
    }

    private void register(){
        idMap.put(MissingServletRequestParameterException.class,-1);
        idMap.put(MethodArgumentNotValidException.class,0);
        idMap.put(MethodArgumentTypeMismatchException.class,1);
        idMap.put(CannotParseStatsTypeException.class,2);
        idMap.put(CannotParseCategoryException.class,3);
        idMap.put(CannotParseStateException.class,4);
        idMap.put(CannotParseJSONException.class,5);
        idMap.put(CannotFetchDataException.class,6);
        idMap.put(ConstraintViolationException.class,7);
        idMap.put(NullPointerException.class,8);
        idMap.put(ConversionFailedException.class,9);
        idMap.put(NoDataAvailableException.class,10);
        idMap.put(DateInvalidException.class,11);
        idMap.put(NoLogFileException.class,12);

    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(Exception e){
        if(e instanceof ExceptionWrapper){
            Exception ex = ((ExceptionWrapper) e).getE();
            if(idMap.containsKey(ex.getClass())){
                ex.printStackTrace(); //TODO: REMOVE THIS
                return error(idMap.get(ex.getClass()),ex.getMessage(),((ExceptionWrapper) e).getTraceNumber());
            }else{
                ex.printStackTrace();
                return error(-9999,ex.getMessage(),((ExceptionWrapper) e).getTraceNumber());
            }
        }else{
            if(e instanceof KnownException && idMap.containsKey(e.getClass())) {
                e.printStackTrace(); //TODO: REMOVE THIS
                return error(idMap.get(e.getClass()), e.getMessage());
            }
            e.printStackTrace();
            return error(-999, e.getMessage());

        }
    }


    private ResultContainer error(int id, String message,String trace) {

        return new ResultContainer(new Header(Status.error,trace), new Error(id, message));
    }

    private ResultContainer error(int id, String message) {

        return new ResultContainer(new Header(Status.error,""), new Error(id, message));
    }
}
