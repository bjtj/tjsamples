/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
