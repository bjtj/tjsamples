from mapbox import Static


def main():
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


if __name__ == '__main__':
    main()
