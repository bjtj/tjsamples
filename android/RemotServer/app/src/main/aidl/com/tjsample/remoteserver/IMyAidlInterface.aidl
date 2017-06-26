// IMyAidlInterface.aidl
package com.tjsample.remoteserver;

// Declare any non-default types here with import statements
import com.tjsample.remoteserver.IMyAidlCallbackInterface;

interface IMyAidlInterface {
    /**
     * Demonstrates some basic types that you can use as parameters
     * and return values in AIDL.
     */
    void basicTypes(int anInt, long aLong, boolean aBoolean, float aFloat,
            double aDouble, String aString);

    String hello();

    boolean registerCallback(IMyAidlCallbackInterface callback);
    boolean unregisterCallback(IMyAidlCallbackInterface callback);
}
