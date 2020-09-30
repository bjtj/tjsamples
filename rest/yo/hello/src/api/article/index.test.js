import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Article } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, article

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  article = await Article.create({ user })
})

test('POST /articles 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, title: 'test', content: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.content).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /articles 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /articles 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /articles/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${article.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(article.id)
})

test('GET /articles/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /articles/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${article.id}`)
    .send({ access_token: userSession, title: 'test', content: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(article.id)
  expect(body.title).toEqual('test')
  expect(body.content).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('PUT /articles/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${article.id}`)
    .send({ access_token: anotherSession, title: 'test', content: 'test' })
  expect(status).toBe(401)
})

test('PUT /articles/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${article.id}`)
  expect(status).toBe(401)
})

test('PUT /articles/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, title: 'test', content: 'test' })
  expect(status).toBe(404)
})

test('DELETE /articles/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${article.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /articles/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${article.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /articles/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${article.id}`)
  expect(status).toBe(401)
})

test('DELETE /articles/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
