var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mailRouter = require('./routes/mail');
// route setup
app.use('/api/mail', mailRouter);

app.use(function(req, res, next) {
    next(createError(404));
  });
