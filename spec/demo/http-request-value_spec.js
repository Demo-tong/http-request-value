/**
 * Created by tong on 16-8-5.
 */
'use strict';

let supertest = require('supertest');
let request = supertest('localhost:3000');

describe("http-request-value", function () {
  it("should get parameter by query", (done)=> {
    request
            .get('/query/?name=1234')
            .expect({"name": "1234"})
            .end((err, res)=> {
              if (err) {
                done.fail(err);
              } else {
                done();
              }
            });
  });

  it("should get parameter by params", (done)=> {
    request
            .get('/params/Demo_tong')
            .expect({name: "Demo_tong"})
            .end((err, res)=> {
              if (err) {
                done.fail(err);
              } else {
                done();
              }
            });
  });

  it("should get parameter by header", (done)=> {
    request
            .post('/header')
            .set({value: '1234'})
            .expect('1234')
            .end((err, res)=> {
              if (err) {
                done.fail(err);
              } else {
                done();
              }
            });
  });
});