const celsiusToFahrenheit = (celsius) => parseFloat(((celsius * 9 / 5) + 32).toFixed(2));

module.exports = { celsiusToFahrenheit };