package com.tjapp.log4j.example;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
 
public class HelloWorld {
    private static final Logger logger = LogManager.getLogger("HelloWorld");
    public static void main(String[] args) {
        logger.info("Hello, Log4j!");
    }
}
