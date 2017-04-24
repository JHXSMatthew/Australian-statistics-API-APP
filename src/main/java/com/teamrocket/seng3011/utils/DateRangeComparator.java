package com.teamrocket.seng3011.utils;

import java.util.Comparator;

/**
 * Created by JHXSMatthew on 24/4/17.
 */
public class DateRangeComparator implements Comparator<DateRange> {
    @Override
    public int compare(DateRange o1, DateRange o2) {
        if(o1.before(o2)){
            return -1;
        }else {
            return 1;
        }
    }
}
