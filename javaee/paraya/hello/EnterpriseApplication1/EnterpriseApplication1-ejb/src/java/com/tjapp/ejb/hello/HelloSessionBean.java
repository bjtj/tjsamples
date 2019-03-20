package com.tjapp.ejb.hello;

import javax.ejb.Stateless;

/**
 *
 * @author tj
 */
@Stateless
public class HelloSessionBean implements HelloSessionBeanRemote {

    public String getGreeting() {
        return "Hello~~!";
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
}
