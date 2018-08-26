#!/usr/bin/node

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Vainglory = require('vainglory');

const API_TOKEN = process.env.API_TOKEN;
if (API_TOKEN == undefined) throw 'Please set $API_TOKEN!';

const app = express();

const routes = require('./routes/index.js');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3001);

module.exports = app;
