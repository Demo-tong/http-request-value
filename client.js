/**
 * Created by tong on 16-8-5.
 */
'use strict';

let request = require('superagent');

//query查询方式传值
request
        .get('localhost:3000/query')
        .query({name: '1234'})
        .end((err, res)=> {
          if (err || !res.ok) {
            console.log("error");
          } else {
            console.log(res.text);
          }
        });

//params方式传值
request
        .get('localhost:3000/params/lisi')
        .end((err, res)=> {
          if (err) {
            console.log("error")
          } else {
            console.log(res.text);
          }
        });

//header方式传值
request
        .post('localhost:3000/header')
        .set("Content_Type", "application/json")
        .set({"name": "tong"})
        .end((err, res)=> {
          if (err) {
            console.log("error");
          } else {
            console.log(res.text);
          }
        });

//json传值方式
request
        .post('localhost:3000/json')
        .set("Content-Type", "application/json")
        .send({"name": "zhang", "age": "13"})
        .end((err, res)=> {
          if (err) {
            console.log("error");
          } else {
            console.log(res.text);
          }
        });

//www传值方式
request
        .post('localhost:3000/url')
        .type('form')
        .send({name: "name"})
        .end((err, res)=> {
          if (err) {
            console.log("error");
          } else {
            console.log(res.text);
          }
        });