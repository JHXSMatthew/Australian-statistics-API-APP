package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.State;
import com.teamrocket.seng3011.api.absApi.entries.*;

import java.util.Date;
import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class EntryFactory {
    private static EntryFactory factory;

    public DateDataEntry getDateDataEntry(Date date,float value,EntryType type){
        switch (type){
            case EXPORT:
                return new DateDataEntryExport(date,value);
            case RETAIL:
                return new DateDataEntryRetail(date,value);
        }
        return null;
    }

    public RegionalDataEntry getRegionalDataEntry(State state,DateDataEntry...entries){
        return new RegionalDataEntry(state,entries);
    }

    public RegionalDataEntry getRegionalDataEntry(State state,List<DateDataEntry> entries){
        return new RegionalDataEntry(state,entries.toArray(new DateDataEntry[entries.size()]));
    }

    /**
     *  manually adding DateDataEntry required.
     * @param state the state
     * @return entry without anything in it
     */
    public RegionalDataEntry getRegionalDataEntry(State state){
        return new RegionalDataEntry(state);
    }

    public MonthlyDataEntry getMonthlyDataEntry(String name,RegionalDataEntry[] entries,EntryType type){
        switch (type){
            case EXPORT:
                return new MonthlyDataEntryExport(name,entries);
            case RETAIL:
                return new MonthlyDataEntryRetail(name,entries);
        }
        return null;
    }

    public MonthlyDataEntry getMonthlyDataEntry(String name,List<RegionalDataEntry> entries,EntryType type){
        switch (type){
            case EXPORT:
                return new MonthlyDataEntryExport(name,entries.toArray(new RegionalDataEntry[entries.size()]));
            case RETAIL:
                return new MonthlyDataEntryRetail(name,entries.toArray(new RegionalDataEntry[entries.size()]));
        }
        return null;
    }

    /**
     *  manually adding MonthlyDataEntry required.
     * @param name industry/commodity name
     * @param type the type either EXPORT OR RETAIL
     * @return MonthlyDataEntry
     */
    public MonthlyDataEntry getMonthlyDataEntry(String name,EntryType type){
        switch (type){
            case EXPORT:
                return new MonthlyDataEntryExport(name);
            case RETAIL:
                return new MonthlyDataEntryRetail(name);
        }
        return null;
    }

    public MonthlyDataExport assemblyOutput(MonthlyDataEntryExport[] entryExports){
        return new MonthlyDataExport(entryExports);
    }

    public MonthlyDataRetail assemblyOutput(MonthlyDataEntryRetail[] entryRetails){
        return new MonthlyDataRetail(entryRetails);
    }

    public static EntryFactory getFactory(){
        if(factory == null){
            factory = new EntryFactory();
        }
        return factory;
    }


}
