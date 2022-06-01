import request from 'supertest';
import { expect } from 'chai';

import app from '~/app';

describe('App', () => {
  before(done => {
    app.listen((err: any) => {
      if (err) return done(err)
      return done()
    })
  })
  it('works properly', done => {
    request(app)
      .get('/')
      .expect(200, (err, res) => {
        if (err) return done(err)
        expect(res.text).to.be.equals('Hello World')
        return done()
      })
  })
});
