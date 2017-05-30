package com.teamrocket.seng3011.analysisPlatform;

import com.teamrocket.seng3011.api.exceptions.KnownException;
import org.junit.Test;

import java.io.IOException;

/**
 * Created by JHXSMatthew on 30/05/2017.
 */
public class CompanyReturnQueryTest {

    @Test
    public void CompanyReturnQueryTest() throws IOException, KnownException {
        IndicatorQuery query = new CompanyReturnQuery("DMP.AX","2014-05-01","5","5");
        System.out.println(query.get());
    }
}
