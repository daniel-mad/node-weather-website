const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGFuaWVsLW0iLCJhIjoiY2tudnhqOHRlMHJqZjJucW5oYndnam9tYiJ9.t4XO9Jm7UZWOYrA8fZthvQ`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find  location. Try another search!', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longtitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
