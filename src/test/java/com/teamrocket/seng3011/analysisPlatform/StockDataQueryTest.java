package com.teamrocket.seng3011.analysisPlatform;

import com.teamrocket.seng3011.api.exceptions.KnownException;
import org.junit.Test;

import java.io.IOException;

/**
 * Created by JHXSMatthew on 30/05/2017.
 */
public class StockDataQueryTest {

    @Test
    public void StockDataTest() throws IOException, KnownException {
        StockDataQuery query = new StockDataQuery("DMP.AX");
        System.out.println(query.get());
    }
}
