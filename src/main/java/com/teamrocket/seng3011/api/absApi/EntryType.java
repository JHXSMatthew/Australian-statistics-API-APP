package com.teamrocket.seng3011.api.absApi;

import com.teamrocket.seng3011.api.exceptions.CannotParseStatsTypeException;

/**
 * Created by JHXSMatthew on 19/03/2017.
 */
public enum EntryType {
    EXPORT("MerchandiseExports"), RETAIL("Retail");

    private String typeString;

    EntryType(String str){
        this.typeString = str;
    }

    public static EntryType parseType(String arg) throws CannotParseStatsTypeException {
        for(EntryType type : values()){
            if(type.typeString.equals(arg))
                return type;
        }
        throw new CannotParseStatsTypeException(arg);
    }
}
