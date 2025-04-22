# Get started with Tailwind CSS #

<https://tailwindcss.com/docs/installation>


``` shell
npm install -D tailwindcss
npx tailwindcss init
```


## tailwind.config.js ##

``` javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## src/input.css ##

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the Tailwind CLI build process ##

``` shell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```


## src/index.html ##

``` xml
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
