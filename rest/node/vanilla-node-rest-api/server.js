const http = require('http');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productController');
const mime = require('mime-types');
const fs = require('fs');
const path = require('path');

const opts = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-type',
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} - ${req.url}`);
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      Allow: 'OPTIONS, GET, POST, PUT, DELETE',
      ...opts,
    });
    res.end();
  } else if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res, opts);
  } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'GET') {
    const id = req.url.split('/')[3]; // e.g. /api/products/1
    getProduct(req, res, id, opts);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res, opts);
  } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'PUT') {
    const id = req.url.split('/')[3]; // e.g. /api/products/1
    updateProduct(req, res, id, opts);
  } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3]; // e.g. /api/products/1
    deleteProduct(req, res, id, opts);
  } else {
    let mimetype = mime.lookup(req.url);
    mimetype = mimetype ? mimetype : 'application/octet-stream';
    let filename = req.url === '/' ? 'public/index.html' : path.join('public', req.url);
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'application/json',
          ...opts
        });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
      } else {
        res.writeHead(200, {
          'Content-Type': mimetype,
          ...opts
        });
        res.end(data);
      }
    });
  }
});

// /api/products/:id
// req.params.id

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
