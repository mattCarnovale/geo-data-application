import React, { Component } from 'react';

import PropTypes from 'prop-types';
import '../css/styles.css';

class GeoDataReport extends Component {
  render() {
    const { city, temp, timezone, elevation } = this.props.geoData;
    return (
      <div className="geo-data-report">
        <h3>Geo-Data Report:</h3>
        <li>City Name: {city}</li>
        <li>Temperature: {temp}</li>
        <li>Timezone: {timezone}</li>
        <li>Elevation: {elevation}</li>
      </div>
    );
  }
}

GeoDataReport.propTypes = {
  geoData: PropTypes.object,
};

export default GeoDataReport;
