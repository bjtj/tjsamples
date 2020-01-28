package com.native_module_sample;

import android.nfc.Tag;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarManager extends ReactContextBaseJavaModule {
    private static final String TAG = "CalendarManager";
    private static ReactApplicationContext reactContext;

    public CalendarManager(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarManager";
    }

    @ReactMethod
    public void addEvent(String name, String location) {
        Log.d(TAG, String.format("Pretending to create an event %s at %s", name, location));
    }
}
