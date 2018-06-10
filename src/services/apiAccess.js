import { Weather, Google } from './apiConstants';

const apiAccess = () => {
  const fetchCityAndTempFromOpenWeather = requestedZipCode => {
    return fetch(Weather.WEATHER_API + `${requestedZipCode}` + Weather.UNITS + Weather.SECRET);
  };

  const getCityAndTemp = requestedZipCode => {
    return new Promise((resolve, reject) => {
      if (!requestedZipCode) return reject(new TypeError('No zip code provided'));

      fetchCityAndTempFromOpenWeather(requestedZipCode)
        .then(response => response.json())
        .then(data => {
          data.temp = data.main.temp;
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };

  const fetchTimeZoneFromGoogle = (latitude, longitude) => {
    return fetch(Google.TIMEZONE_API + `${latitude},${longitude}` + Google.TIMESTAMP + Google.SECRET);
  };

  const getTimeZone = geoData => {
    return new Promise((resolve, reject) => {
      if (!geoData) return reject(new TypeError('No object with latitude & longitude provided'));

      fetchTimeZoneFromGoogle(geoData.coord.lat, geoData.coord.lon)
        .then(response => response.json())
        .then(data => {
          geoData.timezone = data.timeZoneName;
          resolve(geoData);
        })
        .catch(error => reject(error));
    });
  };

  const fetchElevationFromGoogle = (latitude, longitude) => {
    return fetch(Google.ELEVATION_API + `${latitude},${longitude}` + Google.SECRET);
  };

  const getElevation = geoData => {
    return new Promise((resolve, reject) => {
      if (!geoData) return reject(new TypeError('No object with latitude & longitude provided'));

      fetchElevationFromGoogle(geoData.coord.lat, geoData.coord.lon)
        .then(response => response.json())
        .then(data => {
          geoData.elevation = data.results[0].elevation;
          resolve(geoData);
        })
        .catch(error => reject(error));
    });
  };

  const getGeoDataReport = requestedZipCode => {
    return getCityAndTemp(requestedZipCode)
      .then(geoData => {
        return Promise.all([getTimeZone(geoData), getElevation(geoData)]);
      })
      .then(results => results[0])
      .catch(error => console.warn(error));
  };

  return {
    getCityAndTemp,
    getTimeZone,
    getElevation,
    getGeoDataReport,
  };
};

export default apiAccess();
