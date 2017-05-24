package com.teamrocket.seng3011.analysisPlatform;

import org.junit.Test;

import java.io.IOException;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class IndicatorQueryTests {

    @Test
    public void indicatorTest() throws IOException {
        IndicatorQuery query = new IndicatorQuery("DMP.AX","2014-01-01","2014-12-30");
        System.out.println(query.get());
    }
}
