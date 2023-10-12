const Product = require('../models/productModel');
const { getPostData } = require('../utils');

// @desc	Gets All Products
// @route	GET /api/products
async function getProducts(req, res, opts = {}) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, {
      'Content-Type': 'application/json',
      ...opts,
    });
    res.end(JSON.stringify(products));
  } catch (err) {
    console.log(err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
      ...opts
    });
    res.end(JSON.stringify({ error: `${err}` }));
  }
}

// @desc	Gets Singl Products
// @route	GET /api/products/:id
async function getProduct(req, res, id, opts = {}) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, {
        'Content-Type': 'application/json',
        ...opts
      });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        ...opts,
      });
      res.end(JSON.stringify(product));
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
      ...opts
    });
    res.end(JSON.stringify({ error: `${err}` }));
  }
}

// @desc	Create a Products
// @route	POST /api/products
async function createProduct(req, res, opts = {}) {
  try {
    const body = await getPostData(req);
    console.log(`body: ${body}`);
    const { title, description, price } = JSON.parse(body);
    const product = {
      title,
      description,
      price
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, {
      'Content-Type': 'application/json',
      ...opts,
    });
    res.end(JSON.stringify(newProduct));
  } catch (err) {
    console.log(err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
      ...opts
    });
    res.end(JSON.stringify({ error: `${err}` }));
  }
};

// @desc	Update a Products
// @route	PUT /api/products/:id
async function updateProduct(req, res, id, opts = {}) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, {
        'Content-Type': 'application/json',
        ...opts
      });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      const body = await getPostData(req);
      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price
      };
      const updatedProduct = await Product.update(id, productData);
      res.writeHead(200, {
        'Content-Type': 'application/json',
        ...opts,
      });
      res.end(JSON.stringify(updatedProduct));
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
      ...opts
    });
    res.end(JSON.stringify({ error: `${err}` }));
  }
};

// @desc	Delete Products
// @route	DELETE /api/products/:id
async function deleteProduct(req, res, id, opts = {}) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, {
        'Content-Type': 'application/json',
        ...opts
      });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      await Product.remove(id);
      res.writeHead(200, {
        'Content-Type': 'application/json',
        ...opts,
      });
      res.end(JSON.stringify({ message: `Product ${id} removed` }));
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
      ...opts
    });
    res.end(JSON.stringify({ error: `${err}` }));
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
