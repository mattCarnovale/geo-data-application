import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header';
import ZipCodeForm from './components/ZipCodeForm';
import GeoDataReport from './components/GeoDataReport';

class App extends Component {
  //Temp for testing
  geoData = {
    city: 'Portland',
    temp: '20 degrees',
    timezone: 'PCF',
    elevation: '3',
  };

  render() {
    return (
      <div className="cayuse-geo-data-app">
        <Header company="Cayuse" appType="Geo-Data Report Application" />
        <ZipCodeForm />
        <GeoDataReport geoData={this.geoData} />
      </div>
    );
  }
}

export default App;
