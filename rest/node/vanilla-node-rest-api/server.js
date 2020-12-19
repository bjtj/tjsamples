const http = require('http')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productController')


const server = http.createServer((req, res) => {

    if (req.url === '/api/products' && req.method === 'GET') {
	getProducts(req, res)
    } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'GET') {
	const id = req.url.split('/')[3] // e.g. /api/products/1
	getProduct(req, res, id)
    } else if (req.url === '/api/products' && req.method === 'POST') {
	createProduct(req, res)
    } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'PUT') {
	const id = req.url.split('/')[3] // e.g. /api/products/1
	updateProduct(req, res, id)
    } else if (req.url.match(/\/api\/products\/(\w+)/) && req.method === 'DELETE') {
	const id = req.url.split('/')[3] // e.g. /api/products/1
	deleteProduct(req, res, id)
    } else {
	res.writeHead(404, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

// /api/products/:id
// req.params.id

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server
