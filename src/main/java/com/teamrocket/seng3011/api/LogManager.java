package com.teamrocket.seng3011.api;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import javax.swing.filechooser.FileSystemView;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by JHXSMatthew on 17/03/2017.
 */
public class LogManager {
    private static LogManager manager;
    private static String OS = System.getProperty("os.name").toLowerCase();
    private static DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
    private static DateFormat par = new SimpleDateFormat("yyyyMMddHHmmSS");


    private String path;
    private File folder;

    //TODO: finish log manager
    public LogManager(){
        if(isMac() || isWindows()){
            path = FileSystemView.getFileSystemView().getDefaultDirectory().getPath() + File.separatorChar + "seng3011";
        } else if(isUnix()){
            path = "/var/logs/seng3011";
        } else{
            path = "logs";
        }
        folder = new File(path);
        if(!folder.exists()){
            folder.mkdir();
        }
    }

    private Map<String,String> log(String parameters){
        Map<String,String> map = new HashMap<>();
        map.put("devTeam","TeamRocket");
        map.put("version","statsAPI " + APIConfiguration.version);
        map.put("parameters",parameters );
        return map;
    }

    public void log(String parameters, String exceptionMessage, String stackTrack){
        Map<String,String> map = log(parameters);
        map.put("exception", "true");
        map.put("exception_message",exceptionMessage);
        map.put("stackTrack",stackTrack);
        save(map);
    }

    public void log(String parameters, Date starting, Date ending){
        Map<String,String> map = log(parameters);
        map.put("starting",df.format(starting));
        map.put("ending", df.format(ending));
        save(map);
    }

    public void save(Map<String,String> map){
        File f = new File(folder, par.format(Calendar.getInstance().getTime()));
        int i = 0;
        while(f.exists()){
            f = new File(folder, par.format(Calendar.getInstance().getTime()) + "_" + i);
            i ++;
        }
        try {
            f.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        try {
            mapper.writeValue(f,map);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static LogManager getInstance(){
        if(manager == null){
            manager = new LogManager();
        }
        return manager;
    }


    public static boolean isWindows() {
        return (OS.indexOf("win") >= 0);

    }

    public static boolean isMac() {
        return (OS.indexOf("mac") >= 0);

    }

    public static boolean isUnix() {
        return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 || OS.indexOf("aix") > 0 );

    }

    public static boolean isSolaris() {
        return (OS.indexOf("sunos") >= 0);
    }
}