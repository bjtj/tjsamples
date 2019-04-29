from mapbox import Static, Geocoder


def main():

    # ------
    # Static
    # ------
    
    service = Static()
    response = service.image('mapbox.satellite', lon=-61.7, lat=12.1, z=12)
    print(response.status_code)
    print(response.headers['Content-Type'])

    portland = {
        'type': 'Feature',
        'properties': {'name': 'Portland, OR'},
        'geometry': {
            'type': 'Point',
            'coordinates': [-122.7282, 45.5801]
        }
    }

    bend = {
        'type': 'Feature',
        'properties': {'name': 'Bend, OR'},
        'geometry': {
            'type': 'Point',
            'coordinates': [-121.3153, 44.0582]
        }
    }

    response = service.image('mapbox.satellite', features = [portland, bend])
    print(response.status_code)
    print(response.headers['Content-Type'])

    with open('map.png', 'wb') as f:
        _ = f.write(response.content)

    help(Static)

    # --------
    # Geocoder
    # --------

    perm_geocoder = Geocoder(name='mapbox.places-permanet')
    geocoder = Geocoder()

    # Limits

    response = geocoder.forward('Chester, NJ')
    print(response.headers['X-Rate-Limit-Interval'])
    print(response.headers['X-Rate-Limit-Limit'])
    print(response.headers['X-Rate-Limit-Reset'])

    # Response format
    
    collection = response.json()
    print(collection['type'] == 'FeatureCollection')
    print(sorted(collection.keys()))
    print(collection['query'])

    first = collection['features'][0]
    print(first['type'] == 'Feature')

    # Forward geocoding

    response = geocoder.forward('200 queen street')
    print(response.status_code)
    print(response.headers['Content-Type'])
    first = response.geojson()['features'][0]
    print(first['place_name'])

    # Forward geocoding with proximity

    response = geocoder.forward('200 queen street', lon=-66.05, lat=45.27)
    print(response.status_code)
    first = response.geojson()['features'][0]
    print(first['place_name'])
    print([int(coord) for coord in first['geometry']['coordinates']])

    # Forward geocoding with bounding box

    response = geocoder.forward('washington', bbox=[-78.338320, 38.520792, -77.935454, 38.864909], types=('place',))
    print(response.status_code)
    first = response.geojson()['features'][0]
    print(first['place_name'])
    print([round(coord,2) for coord in first['geometry']['coordinates']])

    # Forward geocoding with limited results

    response = geocoder.forward('washington', limit=3)
    print(response.status_code)
    print(len(response.geojson()['features']))

    # Reverse geocoding

    response = geocoder.reverse(lon=-73.989, lat=40.733)
    print(response.status_code)
    features = sorted(response.geojson()['features'], key = lambda x: x['place_name'])
    for f in features:
        print('{place_name}: {id}'.format(**f))

    # Reverse geocoding with limited results by location type

    response = geocoder.reverse(lon=-73.989, lat=40.733, limit=1, types=['country'])
    print(response.status_code)
    features = response.geojson()['features']
    print(len(features))

    print('{place_name}: {id}'.format(**features[0]))

    # Filtering by country code

    response = geocoder.forward('200 queen street', country=['us'])
    print(response.status_code)
    print(any(['Canada' in f['place_name'] for f in response.geojson()['features']]))

    # Filtering by type

    response = geocoder.reverse(lon=-73.989, lat=40.733, types=['poi'])
    print(response.status_code)
    features = response.geojson()['features']
    print(all([f['id'].startswith('poi') for f in features]))
    

if __name__ == '__main__':
    main()
