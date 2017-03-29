package com.teamrocket.seng3011.utils;

import com.teamrocket.seng3011.api.HaveID;

import java.util.Arrays;
import java.util.Map;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class StringUtils {

    public static String haveIdToIdString(HaveID... objs) {
        StringBuilder builder = new StringBuilder();
        for (HaveID obj : objs) {
            builder.append(obj.getId())
                    .append("+");
        }
        return builder.toString().substring(0, builder.length() - 1);
    }

    public static String mapToString(Map map) {
        if (map == null || map.isEmpty()) {
            return "NULL";
        }
        StringBuilder builder = new StringBuilder();
        for (Object key : map.keySet()) {
            Object value = map.get(key);
            String output = null;
            if (value instanceof String) {
                output = (String) value;
            } else if (value instanceof String[]) {
                output = Arrays.toString((String[]) value);
            }
            builder.append(key).append("=").append(output).append("&");
        }
        return builder.toString().substring(0, builder.length() - 1);
    }
}
