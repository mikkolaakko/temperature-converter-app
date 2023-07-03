// eslint-disable-next-line no-unused-vars
const { celsiusToFahrenheit } = require('../src/celsiusToFahrenheit');

describe('The celsius to fahrenheit canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a celsiusToFahrenheit function should', () => {
  it('return 32 for 0', () => {
    expect(celsiusToFahrenheit(0)).toBe(32.00);
  });
  it('return 50 for 10', () => {
    expect(celsiusToFahrenheit(10)).toBe(50.00);
  });
  it('return 212 for 100', () => {
    expect(celsiusToFahrenheit(100)).toBe(212.00);
  });
  it('return -40 for -40', () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40.00);
  });
  it('return -459.67 for -273.15', () => {
    expect(celsiusToFahrenheit(-273.15)).toBe(-459.67);
  });
});