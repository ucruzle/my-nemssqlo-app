"use strict"

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// adds the routes for ui5
var ui5Router = require('./ui5/ui5Router');
app.use('/ui5/', ui5Router.getRouter());

app.listen(process.env.PORT || 8082)