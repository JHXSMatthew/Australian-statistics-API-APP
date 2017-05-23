package com.teamrocket.seng3011.analysisPlatform.models;

import java.util.Map;

/**
 * Created by JHXSMatthew on 23/05/2017.
 */
public class CompanyStockEntry {
    //Date,Open,High,Low,Close,Adj Close,Volume

    private String date;
    private float open;
    private float high;
    private float low;
    private float close;
    private float adjClose;
    private float volume;
    private boolean valid;

    public CompanyStockEntry(Map<String,Object> map){
        this.date = (String) map.get("Date");
        if(map.get("Open") == null){
            valid = false;
            return;
        }else{
            valid = true;
            open = Float.parseFloat((String) map.get("Open"));
            high = Float.parseFloat((String) map.get("High"));
            low = Float.parseFloat((String) map.get("Low"));
            close = Float.parseFloat((String) map.get("Close"));
            adjClose = Float.parseFloat((String) map.get("Adj Close"));
            volume = Float.parseFloat((String) map.get("Volume"));
        }
    }

    public boolean valid(){
        return valid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public float getOpen() {
        return open;
    }

    public void setOpen(float open) {
        this.open = open;
    }

    public float getHigh() {
        return high;
    }

    public void setHigh(float high) {
        this.high = high;
    }

    public float getLow() {
        return low;
    }

    public void setLow(float low) {
        this.low = low;
    }

    public float getClose() {
        return close;
    }

    public void setClose(float close) {
        this.close = close;
    }

    public float getAdjClose() {
        return adjClose;
    }

    public void setAdjClose(float adjClose) {
        this.adjClose = adjClose;
    }

    public float getVolume() {
        return volume;
    }

    public void setVolume(float volume) {
        this.volume = volume;
    }
}
