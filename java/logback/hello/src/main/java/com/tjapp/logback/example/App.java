package com.tjapp.logback.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Hello world!
 *
 */
public class App 
{

    static final Logger LOG = LoggerFactory.getLogger(App.class);
    
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

	LOG.trace("Hello World!");
	LOG.debug("How are you today?");
	LOG.info("I am fine.");
	LOG.warn("I love programming.");
	LOG.error("I am programming.");
    }
}
