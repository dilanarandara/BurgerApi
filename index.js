const http = require('http');
const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');

const bodyParser = require('body-parser');

var orderRoute = require('./routes/v1/order');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(expressValidator([]));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/order', orderRoute);

app.set('port', 3000);

let server = http.createServer(app);
server.listen(3000);