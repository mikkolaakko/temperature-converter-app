var express = require('express');
var router = express.Router();
const { celsiusToFahrenheit } = require('../src/celsiusToFahrenheit');
const { fahrenheitToCelsius } = require('../src/fahrenheitToCelsius');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature Converter' });
});

/* GET fahrenheit to celsius. */
router.get('/api/toCelsius', function(req, res, next) {
  let fahrenheit = parseFloat(req.query.fahrenheit);
  res.json({"value": fahrenheitToCelsius(fahrenheit)+"°C"});
});

/* GET celsius to fahrenheit. */
router.get('/api/toFahrenheit', function(req, res, next) {
  let celsius = parseFloat(req.query.celsius);
  res.json({"value": celsiusToFahrenheit(celsius)+"°F"});
});

module.exports = router;
