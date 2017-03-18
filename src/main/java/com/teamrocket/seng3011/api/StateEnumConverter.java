package com.teamrocket.seng3011.api;

import org.springframework.core.convert.converter.Converter;

/**
 * Created by JHXSMatthew on 17/03/2017.
 */
public class StateEnumConverter implements Converter<String,State> {
    @Override
    public State convert(String s) {
        try {
            return State.valueOf(s);
        }catch (Exception e){
            return null;
        }
    }
}
