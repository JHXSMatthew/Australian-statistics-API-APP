package com.teamrocket.seng3011.api;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import javax.swing.filechooser.FileSystemView;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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
    public LogManager() {
        if (isMac() || isWindows()) {
            path = FileSystemView.getFileSystemView().getDefaultDirectory().getPath() + File.separatorChar + "seng3011";
        } else if (isUnix()) {
            path = "/var/log/seng3011";
        } else {
            path = "logs";
        }
        folder = new File(path);
        if (!folder.exists()) {
            folder.mkdir();
        }
    }

    public static LogManager getInstance() {
        if (manager == null) {
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
        return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 || OS.indexOf("aix") > 0);

    }

    public static boolean isSolaris() {
        return (OS.indexOf("sunos") >= 0);
    }

    private Map<String, String> log(String parameters) {
        Map<String, String> map = new HashMap<>();
        map.put("devTeam", "TeamRocket");
        map.put("version", "statsAPI " + APIConfiguration.version);
        map.put("parameters", parameters);
        return map;
    }

    public String log(String parameters, String exceptionMessage, String stackTrack) {
        Map<String, String> map = log(parameters);
        map.put("exception", "true");
        map.put("exception_message", exceptionMessage);
        map.put("stackTrack", stackTrack);
        return save(map);
    }

    public String log(String parameters, Date starting, Date ending) {
        Map<String, String> map = log(parameters);
        map.put("starting", df.format(starting));
        map.put("ending", df.format(ending));
        return save(map);
    }

    public String save(Map<String, String> map) {
        String returnValue = par.format(Calendar.getInstance().getTime());
        File f = new File(folder, returnValue);
        int i = 0;
        while (f.exists()) {
            returnValue = par.format(Calendar.getInstance().getTime()) + "_" + i;
            f = new File(folder, returnValue );
            i++;
        }
        try {
            f.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        try {
            mapper.writeValue(f, map);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return returnValue;
    }
}
