export const Weather = {
  WEATHER_API: `https://api.develop.apps.cayuse.com/testproxy/data/2.5/weather?zip=`,
  UNITS: `&units=imperial`,
  //Set up a .env with your key for this env variable
  SECRET: `&APPID=${process.env.REACT_APP_WEATHER_SECRET}`,
};

export const Google = {
  TIMEZONE_API: `https://api.develop.apps.cayuse.com/testproxy/maps/api/timezone/json?location=`,
  ELEVATION_API: `https://api.develop.apps.cayuse.com/testproxy/maps/api/elevation/json?locations=`,
  TIMESTAMP: `&timestamp=${Math.floor(Date.now() / 1000)}`,
  //Set up a .env with your key for this env variable
  SECRET: `&key=${process.env.REACT_APP_GOOGLE_SECRET}`,
};
