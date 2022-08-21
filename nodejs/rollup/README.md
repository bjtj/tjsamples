# rollup.js #

<https://rollupjs.org/guide/en/>


```bash
npm install --global rollup
```

## Creating Your First Bundle ##

<https://rollupjs.org/guide/en/#creating-your-first-bundle>

```bash
npm install rollup --global
```

```bash
rollup
```

```bash
rollup src/main.js -f cjs
```

```bash
rollup src/main.js -o bundle.js -f cjs
```

```bash
node
> var myBundle = require('./bundle.js');
> myBundle();
'hello world!'
```

e.g.)

```bash
$ node
require('./bundle.js')();
hello world!
```

## Using Config Files ##

```bash
rollup -c
```

```bash
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
```


## Using plugins ##

package.json

```json
{
  "name": "rollup-tutorial",
  "version": "1.0.0",
  "scripts": {
    "build": "rollup -c"
  }
}
```

```bash
npm install --save-dev @rollup/plugin-json
```


e.g.)

```bash
$ node
require('./bundle.js')();
version 1.0.0
```
