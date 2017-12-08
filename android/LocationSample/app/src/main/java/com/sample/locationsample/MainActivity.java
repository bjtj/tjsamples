package com.sample.locationsample;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import static android.Manifest.permission.ACCESS_FINE_LOCATION;

public class MainActivity extends AppCompatActivity {

    private final static String TAG = "MainActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        LocationManager locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);

        if (ActivityCompat.checkSelfPermission(this, ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                requestPermissions(new String[] {ACCESS_FINE_LOCATION}, 0);
            }
            return;
        }

        locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 0, 0, new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                logd(TAG, "%f, %f", location.getLatitude(), location.getLongitude());
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {
                logd(TAG, "onStatusChanged(%s, %d, bundle)", s, i);
            }

            @Override
            public void onProviderEnabled(String s) {
                logd(TAG, "onProviderEnabled(%s)", s);
            }

            @Override
            public void onProviderDisabled(String s) {
                logd(TAG, "onProviderDisabled(%s)", s);
            }
        });
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

    }

    public void logd(String tag, String fmt, Object ... args) {
        Log.d(tag, String.format(fmt, args));
    }

    public void logw(String tag, String fmt, Object ... args) {
        Log.w(tag, String.format(fmt, args));
    }

    public void logi(String tag, String fmt, Object ... args) {
        Log.i(tag, String.format(fmt, args));
    }

    public void logv(String tag, String fmt, Object ... args) {
        Log.v(tag, String.format(fmt, args));
    }

    public void loge(String tag, String fmt, Object ... args) {
        Log.e(tag, String.format(fmt, args));
    }

    public void loge(String tag, String msg, Throwable tr) {
        Log.d(tag, msg, tr);
    }
}
