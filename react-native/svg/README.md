# react-native-svg #

https://github.com/react-native-community/react-native-svg

```
yarn add react-native-svg
```

## Use with svg files ##

```
yarn add react-native-svg-transformer
```

metro.config.js

```
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

Logo image sample

https://commons.wikimedia.org/wiki/File:Sketch_Logo.svg

```
import Logo from './logo.svg';
```

```
<Logo width={120} height={40} />
```

# react-native-animatable #

https://github.com/oblador/react-native-animatable

```
$ npm install react-native-animatable --save
```


# Pie animation in React Native using SVG #

https://medium.com/@oriharel/pie-animation-in-react-native-using-svg-55d7d3f90156


```
yarn add react-native-svg d3-shape
```
