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

Open `GoogleMapsExample.xcworkspace`

Edit `AppDelegate.swift`:

```
import GoogleMaps
```

Add the following to `application(_:didFinishLaunchingWithOptions:)`

```
GMSServices.provideAPIKey("YOUR_API_KEY")
```


## Step 5: Add a map ##

Edit `ViewController.swift`:

```
import UIKit
import GoogleMaps

class YourViewController: UIViewController {

  // You don't need to modify the default init(nibName:bundle:) method.

  override func loadView() {
    // Create a GMSCameraPosition that tells the map to display the
    // coordinate -33.86,151.20 at zoom level 6.
    let camera = GMSCameraPosition.camera(withLatitude: -33.86, longitude: 151.20, zoom: 6.0)
    let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
    view = mapView

    // Creates a marker in the center of the map.
    let marker = GMSMarker()
    marker.position = CLLocationCoordinate2D(latitude: -33.86, longitude: 151.20)
    marker.title = "Sydney"
    marker.snippet = "Australia"
    marker.map = mapView
  }
}
```

Edit `Info.plist`:

```
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>googlechromes</string>
    <string>comgooglemaps</string>
</array>
```

## Set Google Maps API Key to `Constants.swift` ##

```
let googleMapsApiKey="YOUR-GOOGLE-MAPS-API-KEY"
```
