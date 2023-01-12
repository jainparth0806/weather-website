const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e94d2f796fb9268e769866180589c875&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to conncet to the service", undefined);
    } else if (body.error) {
      callback("No location found. Try another search", undefined);
    } else {
      callback(undefined, body.current);
    }
  });
};

module.exports = forecast;
