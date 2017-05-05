package com.teamrocket.seng3011.utils;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by JHXSMatthew on 23/4/17.
 */
public class ThreadUtils {
    private static ExecutorService executor = Executors.newCachedThreadPool();

    public static void runTask(Runnable runnable){
        executor.submit(runnable);
    }

}
