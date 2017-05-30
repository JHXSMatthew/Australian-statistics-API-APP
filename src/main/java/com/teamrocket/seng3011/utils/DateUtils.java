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


    public static String dateToStringYM(Date date) {
        DateFormat formatym =new SimpleDateFormat("yyyy-MM");
        return formatym.format(date);
    }

    public static String dateToStringYMD(Date date) {
        DateFormat formatymd = new SimpleDateFormat("yyyy-MM-dd");
        return formatymd.format(date);
    }

    public static Date stringToDateYM(String date) throws KnownException {
        DateFormat formatym =new SimpleDateFormat("yyyy-MM");
        try {
            return formatym.parse(date);
        } catch (ParseException e) {
            throw new DateInvalidException(date);
        }
    }

    public static Date stringToDateYMD(String date) throws KnownException {
        DateFormat formatymd = new SimpleDateFormat("yyyy-MM-dd");

        try {
            return formatymd.parse(date);
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

    public static Calendar setTimeToMidnight(Calendar calendar) {
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);

        return calendar;
    }

    public static Calendar setDateToLastInMonth(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DATE,1);
        calendar.add(Calendar.MONTH,1);
        calendar.add(Calendar.DATE,-1);
        return calendar;
    }

    public static Calendar setDateToLastInMonth(Calendar calendar){
        calendar.set(Calendar.DATE,1);
        calendar.add(Calendar.MONTH,1);
        calendar.add(Calendar.DATE,-1);
        return calendar;
    }

    public static Date addDate(Date date, int days){
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DATE,days);
        return c.getTime();
    }

    public static boolean isOnTheSameDate(Date date1, Date date2){
        Calendar c1 = Calendar.getInstance();
        c1.setTime(date1);
        Calendar c2 = Calendar.getInstance();
        c2.setTime(date2);
        return c1.get(Calendar.DATE) == c2.get(Calendar.DATE) &&  c1.get(Calendar.MONTH) ==  c2.get(Calendar.MONTH) &&
                c1.get(Calendar.YEAR) ==  c2.get(Calendar.YEAR);
    }

    public static boolean isAfter(Date date1, Date date2){
        Calendar c1 = Calendar.getInstance();
        c1.setTime(date1);
        Calendar c2 = Calendar.getInstance();
        c2.setTime(date2);
        return c1.after(c2);
    }



}
