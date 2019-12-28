var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose');


/**Routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var config = require('./config/config');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**Mongoose Db Connection */
const url = config.mongoUrl;
const connect = mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
connect.then((db) => {
  console.log('connected');
}, (err) => { console.log(err); });

app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error
  res.status(err.status||500);
  res.json(err);
});

module.exports = app;
