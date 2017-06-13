'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const jwtCheck = require('./middleware/auth');

const app = express();

app.use(jwtCheck);

app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());

// app.use(express.static(path.join(__dirname, '../public')));

// *** FOR CHAT
app.use('/chat-list', routes.chat);

module.exports = app;
