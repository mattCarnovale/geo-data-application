import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

const Header = props => (
  <header className="top">
    <h1 className="company-name">{props.company}</h1>
    <h3 className="app-type">{props.appType}</h3>
  </header>
);

Header.propTypes = {
  company: PropTypes.string,
  appType: PropTypes.string,
};

export default Header;
