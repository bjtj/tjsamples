package com.tjsample.remoteserver;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.RemoteCallbackList;
import android.os.RemoteException;
import android.util.Log;

public class MyService extends Service {

    private final static String TAG = "MyService";
    private static int seed;

    private final static int MSG_WORK = 0;
    private Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);

            switch (msg.what) {
                case MSG_WORK: {
                    int size = callbackList.beginBroadcast();
                    for (int i = 0; i < size; i++) {
                        try {
                            callbackList.getBroadcastItem(i).valueChanged(seed++);
                        } catch (RemoteException e) {
                            Log.e(TAG, "exception", e);
                        }
                    }
                    callbackList.finishBroadcast();
                    sendEmptyMessageDelayed(MSG_WORK, 5 * 1000);
                }
                    break;
                default:
                    break;
            }
        }
    };

    private RemoteCallbackList<IMyAidlCallbackInterface> callbackList = new RemoteCallbackList<>();

    public MyService() {
    }

    /**
     * binder
     */
    private final IMyAidlInterface.Stub binder = new IMyAidlInterface.Stub() {
        @Override
        public void basicTypes(int anInt, long aLong, boolean aBoolean, float aFloat, double aDouble, String aString) throws RemoteException {
            // do nothing
        }

        @Override
        public String hello() throws RemoteException {
            Log.d(TAG, "hello");
            return "hello";
        }

        @Override
        public boolean registerCallback(IMyAidlCallbackInterface callback) throws RemoteException {
            Log.d(TAG, "registerCallback / callback: " + callback);
            return callbackList.register(callback);
        }

        @Override
        public boolean unregisterCallback(IMyAidlCallbackInterface callback) throws RemoteException {
            Log.d(TAG, "unregisterCallback / callback: " + callback);
            return callbackList.unregister(callback);
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        handler.sendEmptyMessageDelayed(MSG_WORK, 5 * 1000);
    }
}
