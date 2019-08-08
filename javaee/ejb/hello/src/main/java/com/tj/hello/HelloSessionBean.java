/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tj.hello;

import javax.ejb.Stateless;

/**
 *
 * @author tj
 */
@Stateless
public class HelloSessionBean implements HelloSessionBeanRemote {

    public String getGreeting(String name) {
        return "Hello, " + name;
    }
    
    

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
}
