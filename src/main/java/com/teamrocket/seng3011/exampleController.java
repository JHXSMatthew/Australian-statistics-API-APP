package com.teamrocket.seng3011;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by JHXSMatthew on 13/03/2017.
 * from Spring tutorial
 */
@RestController
public class exampleController {

    @RequestMapping("/")
    public String greeting() {
        String s = "<!DOCTYPE html>\n" +
                "<html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
                "    \n" +
                "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n" +
                "    <meta name=\"description\" content=\"\">\n" +
                "    <meta name=\"author\" content=\"\">\n" +
                "    <link rel=\"icon\" href=\"http://getbootstrap.com/favicon.ico\">\n" +
                "\n" +
                "    <title>Sticky Footer Template for Bootstrap</title>\n" +
                "\n" +
                "    <!-- Bootstrap core CSS -->\n" +
                "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n" +
                "\n" +
                "    <!-- Custom styles for this template -->\n" +
                "    <link href=\"http://45.76.114.158/wow/temp.css\" rel=\"stylesheet\">\n" +
                "\t\n" +
                "\t<link href=\"https://afeld.github.io/emoji-css/emoji.css\" rel=\"stylesheet\">\n" +
                "\n" +
                "\n" +
                "  </head>\n" +
                "\n" +
                "  <body>\n" +
                "\n" +
                "    <!-- Begin page content -->\n" +
                "    <div class=\"container\">\n" +
                "      <div class=\"page-header\">\n" +
                "        <h1>TeamRocket <i class=\"em em-rocket\"></i></h1>\n" +
                "\n" +
                "      </div>\n" +
                "\t  <p class=\"lead\"> Hello, welcome to the teamRocket home page</p>\n" +
                "\t  <p class=\"lead\"> Our homepage and docs are under-development. You may expect it very soon. We do have a working API so you may use the API right now right here.</p>\n" +
                "\n" +
                "      <p class=\"lead\">API link <a href=\"http://45.76.114.158/api\">http://45.76.114.158/api </a>  You may try it with an <a href=\"http://45.76.114.158/api?StatisticsArea=Retail&State=NSW&Category=ClothingFootwareAndPersonalAccessory,DepartmentStores&startDate=2013-01-01&&endDate=2014-01-01\"> example usage</a>  </p>\n" +
                "\t  <p class=\"lead\">The Australian statistics APi we developed currently works without exceptions handling and log file generation. So when you give some parameters it does not understand, it won't return you a JSON. </p>\n" +
                "\t  <p class=\"lead\"> The parameters you may use can be found in the  <a href=\"https://webcms3.cse.unsw.edu.au/static/uploads/course/SENG3011/17s1/12e2001fa2ebeef1e92aee56fe253667785387e9407869670379c05fe0f78718/AustralianStatisticsAPI_V1_3.pdf\"> specification </a> provided by SENG3011. We will build a API documentation in 5 days from 23rd March.</p>\n" +
                "\t  <p class=\"lead\" align=\"right\">Cheers and Enjoy</p>\n" +
                "\t  <p class=\"lead\" align=\"right\">23/03/2017</p>\n" +
                "\n" +
                "    </div>\n" +
                "\n" +
                "    <footer class=\"footer\">\n" +
                "      <div class=\"container\">\n" +
                "        <p class=\"text-muted\">Teamrocket SENG3011 UNSW</p>\n" +
                "      </div>\n" +
                "    </footer>\n" +
                "\n" +
                "\n" +
                "</body></html>";
        return  s;
    }
}
