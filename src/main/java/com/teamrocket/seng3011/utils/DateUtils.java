package com.teamrocket.seng3011.utils;

import com.teamrocket.seng3011.api.exceptions.DateInvalidException;
import com.teamrocket.seng3011.api.exceptions.KnownException;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by JHXSMatthew on 17/3/17.
 */
public class DateUtils {
    private static DateFormat formatymd = new SimpleDateFormat("yyyy-MM-dd");
    private static DateFormat formatym = new SimpleDateFormat("yyyy-MM");

    public static String dateToStringYM(Date date) {
        return formatym.format(date);
    }

    public static String dateToStringYMD(Date date) {
        return formatymd.format(date);
    }

    public static Date stringToDateYM(String date) throws KnownException {
        try {
            return formatym.parse(date);
        } catch (ParseException e) {
            throw new DateInvalidException(date);
        }
    }

    public static Date stringToDateYMD(String date) throws KnownException {
        try {
            return formatym.parse(date);
        } catch (ParseException e) {
            throw new DateInvalidException(date);
        }
    }

    public static List<DateRange> stringToDataRange(String s){
        List<DateRange> rangeList = new ArrayList<>();
        String[] entries = s.split(";");
        for(String entry : entries){
            String[] range = entry.split(",");
            rangeList.add(new DateRange(range[0],range[1]));
        }
        return rangeList;
    }

    public static String dateRangeToString(List<DateRange> ranges){
        StringBuilder builder = new StringBuilder();
        for(DateRange r : ranges){
            builder.append(dateToStringYMD(r.getStarting().getTime()))
                    .append(",")
                    .append(dateToStringYMD(r.getEnding().getTime()))
                    .append(";");
        }
        return builder.substring(0,builder.length() -1);
    }

    public static Date setTimeToMidnight(Date date) {
        Calendar calendar = Calendar.getInstance();

        calendar.setTime( date );
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);

        return calendar.getTime();
    }

}
