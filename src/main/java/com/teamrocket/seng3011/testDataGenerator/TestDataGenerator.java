package com.teamrocket.seng3011.testDataGenerator;

import com.teamrocket.seng3011.api.HaveID;
import com.teamrocket.seng3011.api.State;
import com.teamrocket.seng3011.api.absApi.entries.EntryType;
import com.teamrocket.seng3011.api.categories.MerchandiseExportsCategory;
import com.teamrocket.seng3011.api.categories.RetailCategory;
import com.teamrocket.seng3011.api.exceptions.CannotParseStateException;
import com.teamrocket.seng3011.utils.DateUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

/**
 * Created by JHXSMatthew on 24/4/17.
 * a test data generator to generate URLs based on number of states/Categories/time range (in month)
 * http://127.0.0.1:8080/api/?StatisticsArea=MerchandiseExports
 * &State=NSW,SA
 * &Category=CrudMaterialAndInedible,MineralFuelLubricentAndRelatedMaterial
 * &startDate=2013-01-01&&endDate=2014-01-01

 */
public class TestDataGenerator {


    // generator <outfile> <number_of_states> <number_of_categories> <time_span_in_month> <max_number_of_urls>
    //e.g. generator out1 3 4 6 100--> generate 100 unique urls with 3 states,4 categories,6 months from starting to ending date
    // NOTE: output would be less than 100 if C < 100

    private static String arraySeparator = ",";
    private static String parameterSeparator = "&";
    private static String startingSymbol = "?";
    private static String keyValeSeparator = "=";
    private static boolean variableName = true;

    public static void main(String[] argv) throws IOException, CannotParseStateException {
        if(argv.length < 5){
            System.err.println("generator <outfile> <number_of_states> <number_of_categories> <time_span_in_month> <max_number_of_urls>");
            return;
        }

        File f = new File(argv[0]);
        if(!f.exists()){
            f.createNewFile();
        }
        int numberStates = Integer.parseInt(argv[1]);
        int numberCategories = Integer.parseInt(argv[2]);
        int numberMonths = Integer.parseInt(argv[3]);
        int maxURLs = Integer.parseInt(argv[4]);

        List<MultiValueMap<String,String>> mapList = getParameterEntries(numberStates,numberCategories,numberMonths,maxURLs);
        BufferedWriter writer = new BufferedWriter( new FileWriter (f));
        for(MultiValueMap<String,String> map : mapList){
            StringBuilder builder = new StringBuilder();
            builder.append(startingSymbol);
            for (String s : map.keySet()) {
                List<String> values = map.get(s);
                if(variableName){
                    builder.append(s)
                            .append(keyValeSeparator);
                }
                values.forEach(value ->{
                    builder.append(value)
                            .append(arraySeparator);
                });
                builder.deleteCharAt(builder.length() -1)
                        .append(parameterSeparator);
            }
            builder.deleteCharAt(builder.length() -1);
            writer.write(builder.toString());
            writer.newLine();
            writer.flush();
        }
        writer.close();
        System.out.println("[D] Total URLs generated: " + mapList.size() + "!");
    }




    public static List<MultiValueMap<String,String>> getParameterEntries(int numberStates, int numberCategories, int numberMonths , int maxURLs) throws CannotParseStateException {
        List<MultiValueMap<String,String>> mapList = new ArrayList<>();

        for(int i = 0 ; i < maxURLs ; i ++ ){
            Random r = new Random();
            EntryType type = null;
            HaveID[] state = getMaxHaveIDs(r,numberStates,State.values());
            HaveID[] catrgories = null;
            if(r.nextBoolean()){
                type = EntryType.RETAIL;
                catrgories = getMaxHaveIDs(r,numberCategories,RetailCategory.values());
            }else{
                type = EntryType.EXPORT;
                catrgories = getMaxHaveIDs(r,numberCategories,MerchandiseExportsCategory.values());
            }
            Calendar calendar = Calendar.getInstance();
            calendar.set(Calendar.YEAR,2000 + r.nextInt(17));
            calendar.set(Calendar.MONTH, r.nextInt(12));
            calendar.set(Calendar.DATE,r.nextInt(27)); //Feb 28
            Date starting = calendar.getTime();
            calendar.add(Calendar.MONTH,numberMonths);
            Date ending = calendar.getTime();

            MultiValueMap<String,String> map = new LinkedMultiValueMap<>();
            map.add("StatisticsArea",type.getTypeString());
            Arrays.stream(state).forEach(s->{
                map.add("State",s.toString());
            });
            Arrays.stream(catrgories).forEach(category -> {
                map.add("Category",category.toString());
            });
            map.add("startDate", DateUtils.dateToStringYMD(starting));
            map.add("endDate", DateUtils.dateToStringYMD(ending));

            mapList.add(map);
        }
        return mapList;
    }

    public static HaveID[] getMaxHaveIDs(Random r, int max, HaveID[] array) throws CannotParseStateException {
        List<HaveID> list = new ArrayList<>();
        Arrays.stream(array).forEach(s ->{
            list.add(s);
        });
        int loopMax = Math.max(array.length - max,1);

        for(int i = 0 ; i < loopMax ; i ++){
            list.remove(r.nextInt(list.size()));
        }
        return list.toArray(new HaveID[list.size()]);
    }


}
