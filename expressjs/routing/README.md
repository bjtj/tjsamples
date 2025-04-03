# Routing #

<https://expressjs.com/en/guide/routing.html>

e.g.)

``` javascript
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
```

## Path route matching syntax ##

<https://expressjs.com/en/guide/migrating-5.html#path-syntax>
