const fahrenheitToCelsius = (fahrenheit) => parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(2));

module.exports = { fahrenheitToCelsius };