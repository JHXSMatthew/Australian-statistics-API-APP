package com.teamrocket.seng3011.api;


import org.springframework.context.annotation.Configuration;
import org.springframework.format.support.FormattingConversionService;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * Created by JHXSMatthew on 17/03/2017.
 */

@Configuration
public class APIConfiguration extends WebMvcConfigurationSupport {

    @Override
    public FormattingConversionService mvcConversionService() {
        FormattingConversionService f = super.mvcConversionService();
        f.addConverter(new StateEnumConverter());
        return f;
    }
}
