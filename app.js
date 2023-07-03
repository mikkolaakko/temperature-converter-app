var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// Health Check
var health = require('@cloudnative/health-connect');
let healthCheck = new health.HealthChecker();

// Liveness Probe
const livePromise = () => new Promise((resolve, _reject) => {
  const appFunctioning = true;
  // You should change the above to a task to determine if your app is functioning correctly
  if (appFunctioning) {
    resolve();
  } else {
    reject(new Error("App is not functioning correctly"));
  }
});
let liveCheck = new health.LivenessCheck("LivenessCheck", livePromise);
healthCheck.registerLivenessCheck(liveCheck);

app.use('/live', health.LivenessEndpoint(healthCheck))

// Readiness Probe
let readyCheck = new health.PingCheck("example.com");
healthCheck.registerReadinessCheck(readyCheck);

app.use('/ready', health.ReadinessEndpoint(healthCheck))

app.use('/health', health.HealthEndpoint(healthCheck))

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
  res.render('error');
});

module.exports = app;
