# Get Started #

* https://developers.google.com/maps/documentation/ios-sdk/start


## Step 2: Install the SDK ##

```
$ pod init
```

Edit `Podfile`:

```
source 'https://github.com/CocoaPods/Specs.git'

target 'YOUR_APPLICATION_TARGET_NAME_HERE' do

  pod 'GoogleMaps'
  pod 'GooglePlaces'
  ...
end
```

```
$ pod install
```


## Step 4: Add the API key to your application ##

Open `GoogleMapsExampleObjc.xcworkspace`

Edit `AppDelegate.m`:

```
@import GoogleMaps;
```

Add the following to `application:didFinishLaunchingWithOptions:`

```
[GMSServices provideAPIKey:@"YOUR_API_KEY"];
```


## Step 5: Add a map ##

Edit `ViewController.m`:

```
#import "YourViewController.h"
#import <GoogleMaps/GoogleMaps.h>

@implementation YourViewController

// You don't need to modify the default initWithNibName:bundle: method.

- (void)loadView {
  // Create a GMSCameraPosition that tells the map to display the
  // coordinate -33.86,151.20 at zoom level 6.
  GMSCameraPosition *camera = [GMSCameraPosition cameraWithLatitude:-33.86
                                                          longitude:151.20
                                                               zoom:6];
  GMSMapView *mapView = [GMSMapView mapWithFrame:CGRectZero camera:camera];
  mapView.myLocationEnabled = YES;
  self.view = mapView;

  // Creates a marker in the center of the map.
  GMSMarker *marker = [[GMSMarker alloc] init];
  marker.position = CLLocationCoordinate2DMake(-33.86, 151.20);
  marker.title = @"Sydney";
  marker.snippet = @"Australia";
  marker.map = mapView;
}

@end
```

Edit `Info.plist`:

```
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>googlechromes</string>
    <string>comgooglemaps</string>
</array>
```
