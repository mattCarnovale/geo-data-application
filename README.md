<h1 align="center">
  Geo Data Report
</ h1>
<h3 align="center">  
   A Geographic-Data Reporting Application Exercise <br />
</h3>
<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
</p>

## About

This is an application built with <a href="https://reactjs.org/">React</a> where a user can enter a US zipcode to receive a small report that communicates the name, current temperature, timezone, and elevation of the city. This information is acquired through API calls to <a href="https://openweathermap.org/api">OpenWeatherMap</a>, <a href="https://developers.google.com/maps/documentation/timezone/intro">Google Time Zone</a>, and <a href="https://developers.google.com/maps/documentation/elevation/start">Google Elevation</a>.

## Getting Started

### Prerequisites

Install **Node.js** by following <a href="https://nodejs.org/en/">these instructions</a>.

Follow <a href="https://www.npmjs.com/get-npm">these instructions</a> to install **npm**.

### Installation

1.  Clone the repository to your local machine with: <br />
    `git clone https://github.com/mattCarnovale/geo-data-app.git`

    _Alternative: download the zip of the project._

2.  Navigate to the project directory and install dependencies with the command: <br />
    `npm install`

3.  Create a `.env` file and assign a valid API key as follows: <br />

```
REACT_APP_WEATHER_SECRET=<your key here>;
REACT_APP_GOOGLE_SECRET=<your key here>;
```

### Usage

1.  Using a command line tool, navigate to the project directory and execute the command: <br />
    `npm start`

## V.1.0 Roadmap

- [x] Separate project into basic UI components.
- [x] Build out basic UI and styling for: Header, ZipCodeForm, and GeoDataReport components.
- [x] Write service to manage api calls to OpenWeatherMap, Google Time Zone, and Google Elevation.
- [x] Add some input checking on the Zip Code form to ensure the user requests a valid US zip code
- [ ] Add error message state to render a message comminucating why the input is invalid (_currently reports to console_).
- [ ] Add a state variable to manage how the Geo-Data report is rendered--displayed versus not displayed until report exists.
- [ ] Handle error when a user enters input that is a valid type and length but doesn't correspond to a city(api call responds with a 404)  

#### V.1.1: Convert to Full-Stack application by using Node.js to serve Api calls to the frontend.

## Author

- <a href="https://github.com/mattCarnovale">Matt Carnovale</a>
