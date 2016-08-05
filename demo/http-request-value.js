/**
 * Created by tong on 16-8-5.
 */
'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/query', (req, res)=> {
  res.send(req.query);
});

app.get('/params/:name', (req, res)=> {
  res.send(req.params);
});

app.post('/header', (req, res)=> {
  res.send(req.get('name'));
});

app.post('/json', (req, res)=> {
  res.send(req.body);
});

app.post('/url', (req, res)=> {
  res.send(req.body.name);
});

app.listen(3000, ()=> {
  console.log("listening on port 3000");
});