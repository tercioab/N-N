const express = require('express');

const userBook = require('./router/userBook.router')

const app = express();

app.use(express.json());

app.use('/userbooks', userBook)

module.exports = app;

