package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.State;
import com.teamrocket.seng3011.api.absApi.entries.*;
import com.teamrocket.seng3011.api.categories.MerchandiseExportsCategory;
import com.teamrocket.seng3011.api.categories.RetailCategory;
import com.teamrocket.seng3011.api.exceptions.CannotParseCategoryException;
import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;

import java.util.Date;
import java.util.List;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public class EntryFactory {
    private static EntryFactory factory;

    public static EntryFactory getFactory() {
        if (factory == null) {
            factory = new EntryFactory();
        }
        return factory;
    }

    public DateDataEntry getDateDataEntry(Date date, double value, EntryType type) {
        switch (type) {
            case EXPORT:
                return new DateDataEntryExport(date, value);
            case RETAIL:
                return new DateDataEntryRetail(date, value);
        }
        return null;
    }

    public RegionalDataEntry getRegionalDataEntry(State state, DateDataEntry... entries) {
        return new RegionalDataEntry(state, entries);
    }

    public RegionalDataEntry getRegionalDataEntry(State state, List<DateDataEntry> entries) {
        return new RegionalDataEntry(state, entries.toArray(new DateDataEntry[entries.size()]));
    }

    /**
     * manually adding DateDataEntry required.
     *
     * @param state the state
     * @return entry without anything in it
     */
    public RegionalDataEntry getRegionalDataEntry(State state) {
        return new RegionalDataEntry(state);
    }

    public MonthlyDataEntry getMonthlyDataEntry(String name, RegionalDataEntry[] entries, EntryType type) throws CannotParseCategoryException {
        MonthlyDataEntry entry = getMonthlyDataEntry(name, type);
        for (RegionalDataEntry i : entries) {
            entry.addRegionalDataEntry(i);
        }
        entry.pack();
        return entry;
    }

    public MonthlyDataEntry getMonthlyDataEntry(String name, List<RegionalDataEntry> entries, EntryType type) throws CannotParseCategoryException {
        MonthlyDataEntry entry = getMonthlyDataEntry(name, type);
        for (RegionalDataEntry i : entries) {
            entry.addRegionalDataEntry(i);
        }
        entry.pack();
        return null;
    }

    /**
     * manually adding MonthlyDataEntry required.
     *
     * @param id   industry/commodity id
     * @param type the type either EXPORT OR RETAIL
     * @return MonthlyDataEntry
     */
    public MonthlyDataEntry getMonthlyDataEntry(String id, EntryType type) throws CannotParseCategoryException {
        switch (type) {
            case EXPORT:
                return new MonthlyDataEntryExport(MerchandiseExportsCategory.parseCategory(id));
            case RETAIL:
                return new MonthlyDataEntryRetail(RetailCategory.parseCategory(id));
        }
        return null;
    }

    public MonthlyDataExport assemblyOutput(MonthlyDataEntryExport[] entryExports) {
        return new MonthlyDataExport(entryExports);
    }

    public MonthlyDataRetail assemblyOutput(MonthlyDataEntryRetail[] entryRetails) {
        return new MonthlyDataRetail(entryRetails);
    }

    public Object assemblyOutput(MonthlyDataEntry[] entries, EntryType type) throws CannotParseStatsTypeException {
        switch (type) {
            case EXPORT:
                return assemblyOutput((MonthlyDataEntryExport[]) entries);
            case RETAIL:
                return assemblyOutput((MonthlyDataEntryRetail[]) entries);
        }
        throw new CannotParseStatsTypeException("unknown type " + type);
    }


}
