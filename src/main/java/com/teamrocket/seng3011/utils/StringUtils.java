package com.teamrocket.seng3011.utils;

import com.teamrocket.seng3011.api.HaveID;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class StringUtils {

    public static String haveIdToIdString(HaveID... objs){
        StringBuilder builder = new StringBuilder();
        for(HaveID obj : objs){
            builder.append(obj.getId())
                    .append("+");
        }
        return builder.toString().substring(0,builder.length() -1);
    }
}
