require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/status');
const slackRouter = require('./routes/slack');
const models = require('./models');
const Op = models.Sequelize.Op;
const app = express();
const Sequelize = require('sequelize');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/status', apiRouter);
app.use('/slack', slackRouter);

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


const bodyParser = require("body-parser");
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.use(express.json());

var status = {}

var schedule = require('node-schedule');
let deleteFromTime = new Date();
deleteFromTime.setSeconds(deleteFromTime.getSeconds() - 1800);

var j = schedule.scheduleJob(' */15 * * * *', function(){
  models.Status.destroy({
    where: {
      createdAt: {
        [Op.gt]: Sequelize.literal("NOW() - INTERVAL '60 minutes'")
      }}
  })
  console.log('Cleaning DB from old records - all status from more then 30 mins ago will be deleted');
});

module.exports.app = app;
module.exports.status = status;

