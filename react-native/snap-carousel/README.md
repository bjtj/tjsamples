# react-native-snap-carousel #

https://github.com/archriss/react-native-snap-carousel

```
$ npm install --save react-native-snap-carousel
```


```
$ npm install --save @types/react-native-snap-carousel
```


```
import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
```
