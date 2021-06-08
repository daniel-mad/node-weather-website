const request = require('postman-request');

const forecast = (latitude, longtitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=6932f6c9de794907bcd5ecee91e9e82d&query=${latitude},${longtitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb('Unable to connect to weather service!');
    } else if (body.error) {
      cb('Unable to find location!');
    } else {
      cb(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degress out. Humidity is ${body.current.humidity}.`
      );
    }
  });
};

module.exports = forecast;
