package com.teamrocket.seng3011.utils;

import com.teamrocket.seng3011.api.exceptions.KnownException;
import org.junit.Test;
import static org.junit.Assert.*;


import java.util.Calendar;
import java.util.Date;

/**
 * Created by JHXSMatthew on 26/04/2017.
 */
public class DateUtilsTests {

    @Test
    public void conventionTest() throws KnownException {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, 1996);
        calendar.set(Calendar.MONTH,0);
        calendar.set(Calendar.DATE,11);
        String YYMMExpected = "1996-01";
        String YYMMDDExpected = YYMMExpected + "-11";
        assertEquals(DateUtils.dateToStringYM(calendar.getTime()),YYMMExpected);
        assertEquals(DateUtils.dateToStringYMD(calendar.getTime()),YYMMDDExpected);
        System.out.println("Passed Convention Tests!");
    }

    @Test
    public void mergeTest() throws KnownException {
        Calendar s1 = Calendar.getInstance();
        s1.set(Calendar.YEAR, 1996);
        s1.set(Calendar.MONTH,0);
        s1.set(Calendar.DATE,11);
        Calendar e1 = Calendar.getInstance();
        e1.set(Calendar.YEAR, 1997);
        e1.set(Calendar.MONTH,0);
        e1.set(Calendar.DATE,11);

        Calendar s2 = Calendar.getInstance();
        s1.set(Calendar.YEAR, 1996);
        s2.set(Calendar.MONTH,1);
        s2.set(Calendar.DATE,11);
        Calendar e2 = Calendar.getInstance();
        e2.set(Calendar.YEAR, 1996);
        e2.set(Calendar.MONTH,2);
        e2.set(Calendar.DATE,17);

        //standard case 2 in 1
        DateRange range1 = new DateRange(s1,e1);
        DateRange range2 = new DateRange(s2,e2);
        DateRange temp = null;
        try {
            assertTrue(range1.merge(range2) != null);
            temp = range2;
            range2 = range1;
            range1 = temp;
            assertTrue(range1.merge(range2) != null);
        } catch (Exception e) {
            e.printStackTrace();
            fail();
        }

        // cannot merge
        s2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,2);
        e2.set(Calendar.YEAR,2015);
        e2.set(Calendar.MONTH,2);
        range1 = new DateRange(s1,e1);
        range2 = new DateRange(s2,e2);
        try {
            assertTrue(range1.merge(range2) == null);
            fail();
        } catch (Exception e) {
        }

        // continuous case
        s1.set(Calendar.YEAR,2010);
        s1.set(Calendar.MONTH,2);
        e1.set(Calendar.YEAR,2010);
        e1.set(Calendar.MONTH,3);
        s2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,4);
        e2.set(Calendar.YEAR,2015);
        e2.set(Calendar.MONTH,5);
        range1 = new DateRange(s1,e1);
        range2 = new DateRange(s2,e2);
        try {
            assertTrue(range1.merge(range2) != null);
        } catch (Exception e) {
            fail();
        }

        // continuous case
        s1.set(Calendar.YEAR,2010);
        s1.set(Calendar.MONTH,2);
        e1.set(Calendar.YEAR,2010);
        e1.set(Calendar.MONTH,3);
        s2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,3);
        e2.set(Calendar.YEAR,2015);
        e2.set(Calendar.MONTH,5);
        range1 = new DateRange(s1,e1);
        range2 = new DateRange(s2,e2);
        try {
            assertTrue(range1.merge(range2) != null);
        } catch (Exception e) {
            fail();
        }

        // continuous case
        s1.set(Calendar.YEAR,2010);
        s1.set(Calendar.MONTH,3);
        e1.set(Calendar.YEAR,2015);
        e1.set(Calendar.MONTH,5);
        s2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,2);
        e2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,3);
        range1 = new DateRange(s1,e1);
        range2 = new DateRange(s2,e2);
        try {
            assertTrue(range1.merge(range2) != null);
        } catch (Exception e) {
            fail();
        }

        // partial joint
        s1.set(Calendar.YEAR,2010);
        s1.set(Calendar.MONTH,3);
        e1.set(Calendar.YEAR,2015);
        e1.set(Calendar.MONTH,5);
        s2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,2);
        e2.set(Calendar.YEAR,2010);
        e2.set(Calendar.MONTH,3);
        range1 = new DateRange(s1,e1);
        range2 = new DateRange(s2,e2);
        try {
            assertTrue(range1.merge(range2) != null);
        } catch (Exception e) {
            fail();
        }
    }

}
