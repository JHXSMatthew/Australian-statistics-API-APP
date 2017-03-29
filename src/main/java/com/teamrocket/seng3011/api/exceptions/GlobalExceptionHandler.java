package com.teamrocket.seng3011.api.exceptions;

import com.teamrocket.seng3011.api.results.Header;
import com.teamrocket.seng3011.api.results.ResultContainer;
import com.teamrocket.seng3011.api.results.Status;
import org.springframework.core.convert.ConversionFailedException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Collections;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by JHXSMatthew on 18/03/2017.
 */
@ControllerAdvice
@Component
public class GlobalExceptionHandler {

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle (MissingServletRequestParameterException exception){
        return error(-1,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResultContainer handle(MethodArgumentNotValidException exception) {
        return error(0,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(MethodArgumentTypeMismatchException exception) {
        return error(1,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(CannotParseStatsTypeException exception) {
        return error(2,exception.getMessage());

    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(CannotParseCategoryException exception) {
        return error(3,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(CannotParseStateException exception) {
        return error(4,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(CannotParseJSONException exception) {
        return error(5,exception.getMessage());
    }


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(CannotFetchDataException exception) {
        return error(6,exception.getMessage());
    }


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResultContainer handle(ConstraintViolationException exception) {
        return error(7,exception.getMessage());
    }

    @ExceptionHandler
    @ResponseBody
    @ResponseStatus()
    public ResultContainer handle(NullPointerException exception) {
        return error(8,exception.getMessage());
    }


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus
    public ResultContainer handle(ConversionFailedException exception){
        return error(9,exception.getMessage());
    }


    private ResultContainer error(int id,String message) {

        return new ResultContainer(new Header(Status.error),new Error(id,message));
    }
}
