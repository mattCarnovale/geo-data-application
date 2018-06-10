export const Weather = {
  WEATHER_API: `https://api.develop.apps.cayuse.com/testproxy/data/2.5/weather?zip=`,
  UNITS: `&units=imperial`,
  //Replace bracket comment a valid api key
  API_KEY: '&APPID=[REPLACE_WITH_YOUR_API]',
};

export const Google = {
  TIMEZONE_API: `https://api.develop.apps.cayuse.com/testproxy/maps/api/timezone/json?location=`,
  ELEVATION_API: `https://api.develop.apps.cayuse.com/testproxy/maps/api/elevation/json?locations=`,
  TIMESTAMP: `&timestamp=${Math.floor(Date.now() / 1000)}`,
  //Replace bracket comment a valid api key
  API_KEY: `&key=[REPLACE_WITH_YOUR_API]`,
};
