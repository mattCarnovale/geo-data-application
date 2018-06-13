import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header';
import ZipCodeForm from './components/ZipCodeForm';
import GeoDataReport from './components/GeoDataReport';
import { apiAccess } from './services';

class App extends Component {
  state = {
    geoData: {},
  };

  getGeoDataReport = requestedZipCode => {
    apiAccess
      .getGeoDataReport(requestedZipCode)
      .then(data => {
        const geoData = data;
        if (geoData === undefined) {
          //Only update state if the call was successful
          console.warn('The api call was unsuccessful');
        } else {
          this.setState({ geoData });
        }
      })
      .catch(error => console.warn(error));
  };

  render() {
    return (
      <div className="cayuse-geo-data-app">
        <Header company="Cayuse" appType="Geo-Data Report Application" />
        <ZipCodeForm getGeoDataReport={this.getGeoDataReport} />
        <GeoDataReport geoData={this.state.geoData} />
      </div>
    );
  }
}

export default App;
