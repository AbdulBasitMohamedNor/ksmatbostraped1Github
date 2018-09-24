var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//"ng build && nodemon ./bin/www"

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/KsLista', { promiseLibrary: require('bluebird') }) //{ useNewUrlParser: true}
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));


var apiRouter = require('./routes/ksRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './dist/LsLista')));
app.use('/', express.static(path.join(__dirname, './dist/LsLista')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
   res.sendStatus(err.status);

});

module.exports = app;
/* var express = require('express');
var path = require('path');
var http = require('http');

var app = express();



app.use(express.static('./dist/Angular6Deploy'));

app.get('/*', (req, res) =>
{res.sendFile(path.join(__dirname, './dist/Angular6Deploy/index.html'))});




app.listen(process.env.PORT || 8080, ()=>
{console.log('Running....Baz')}); */

