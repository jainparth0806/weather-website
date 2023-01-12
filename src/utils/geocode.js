const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=05ccc41d935e12b9fdcb85f37d5484bb&query=${address}&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to service", undefined);
    } else if (body.data == undefined || body.data.length == 0) {
      callback("No city found. Try another search!", undefined);
    } else {
      data = {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
