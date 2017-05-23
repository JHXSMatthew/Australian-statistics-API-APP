package com.teamrocket.seng3011.analysisPlatform;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teamrocket.seng3011.analysisPlatform.models.Company;
import org.junit.Test;

/**
 * Created by JHXSMatthew on 20/05/2017.
 */
public class PlatformTest {
    @Test
    public void platformTest() throws JsonProcessingException {
        Company company = new Company("myname","myID");
        ObjectMapper mapper = new ObjectMapper();
        System.out.println(mapper.writeValueAsString(company));
    }
}
