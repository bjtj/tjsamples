package com.tjapp.ejb.hello;

import javax.ejb.Remote;

/**
 *
 * @author tj
 */
@Remote
public interface HelloSessionBeanRemote {

    String getGreeting();
    
}
