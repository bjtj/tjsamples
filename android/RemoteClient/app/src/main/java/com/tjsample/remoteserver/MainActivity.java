package com.tjsample.remoteserver;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.RemoteException;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    private final static String TAG = "MainActivity";
    private IMyAidlInterface myAidlInterface;

    /**
     * callback
     */
    private IMyAidlCallbackInterface callback = new IMyAidlCallbackInterface.Stub() {
        @Override
        public void valueChanged(long value) throws RemoteException {
            Log.d(TAG, "valueChanged() / value: " + value);
        }
    };

    /**
     * service connection
     */
    private ServiceConnection serviceConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {

            Log.d(TAG, "onServiceConnected()");

            myAidlInterface = IMyAidlInterface.Stub.asInterface(service);

            try {
                String msg = myAidlInterface.hello();
                Log.d(TAG, "hello() / " + msg);
                myAidlInterface.registerCallback(callback);
            } catch (RemoteException e) {
                Log.e(TAG, "remote exception", e);
            }
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {
            Log.d(TAG, "onServiceDisconnected()");
            myAidlInterface = null;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Intent intent = new Intent();
        intent.setClassName("com.tjsample.remoteserver", "com.tjsample.remoteserver.MyService");
        getApplicationContext().bindService(intent, serviceConnection, BIND_AUTO_CREATE);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unbindService(serviceConnection);
    }
}
