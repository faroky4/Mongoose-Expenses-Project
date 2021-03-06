const path = require('path');
const api = require('./routes/api');
const express = require('express');
const app = express();
let port = 5000;

// app.use(express.json());
// app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'model')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/' , api);

app.listen(port, function (request, response) {
  console.log(`Server is up`);
});