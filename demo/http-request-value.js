/**
 * Created by tong on 16-8-5.
 */
'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/query', function (req, res) {
  res.send(req.query);
});

app.listen(3000, ()=> {
  console.log("listening on port 3000");
});