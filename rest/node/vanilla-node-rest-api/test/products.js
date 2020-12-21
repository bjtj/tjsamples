const server = require('../server')
const fetch = require('node-fetch')
const assert = require('assert')

describe('Products', () => {

    after(() => {
	server.close()
    })

    describe('GET /api/products', () => {
	it('', done => {
	    fetch('http://localhost:5000/api/products')
		.then(res => res.json())
		.then(json => {
		    assert(Array.isArray(json))
		    item = json[json.length-1]
		    done()
		})
		.catch(err => {
		    done(err)
		})
	})
    })

    let item = '';

    const product = {
	title: 'Test Item',
	description: 'This is test'
    }

    describe('POST /api/products', () => {
	it('', done => {
	    fetch('http://localhost:5000/api/products',
		  {
		      method: 'POST', body: JSON.stringify(product)
		  })
		.then(res => {
		    assert.equal(res.status, 201)
		    return res.json()
		})
		.then(json => {
		    assert.equal(json.title, product.title)
		    assert.equal(json.description, product.description)
		    item = json
		    return fetch(`http://localhost:5000/api/products/${item.id}`)
		})
		.then(res => {
		    assert.equal(res.status, 200)
		    return res.json()
		})
		.then(json => {
		    assert.equal(json.id, item.id)
		    done()
		})
		.catch(err => {
		    done(err)
		})
	})
    })

    describe('PUT /api/products/:id', () => {
	it('', done => {
	    fetch(`http://localhost:5000/api/products/${item.id}`,
		  {
		      method: 'PUT', body: JSON.stringify({title: 'Updated Title'})
		  })
		.then(res => res.json())
		.then(json => {
		    assert.equal(json.id, item.id)
		    assert.equal(json.title, 'Updated Title')
		    item = json
		    done()
		})
		.catch(err => {
		    done(err)
		})
	})
    })

    describe('DELETE /api/products/:id', () => {
	it('', done => {
	    fetch(`http://localhost:5000/api/products/${item.id}`,
		  {
		      method: 'DELETE'
		  })
		.then(res => res.json())
		.then(json => fetch(`http://localhost:5000/api/products/${item.id}`))
		.then(res => {
		    assert.equal(res.status, 404)
		    done()
		})
		.catch(err => {
		    done(err)
		})
	})
    })
})
