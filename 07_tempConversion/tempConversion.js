const convertToCelsius = function(temp) {
  //C = (F - 32) * 5/9
  let rounded = Math.round(((temp - 32) * (5/9)) * 10) / 10;
  let fixed = rounded.toFixed(1);
  return rounded
};

const convertToFahrenheit = function(temp) {
  //F = (C * 9/5) + 32
  let rounded = Math.round(((temp * 9/5) + 32) * 10) / 10;
  let fixed = rounded.toFixed(1);
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
