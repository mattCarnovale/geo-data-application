import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

class ZipCodeForm extends Component {
  zipCodeRef = React.createRef();

  onSubmitZipCode = event => {
    event.preventDefault();
    //Set a const var to capture the ref
    const userZipCode = this.zipCodeRef.current.value;

    //Do some input checking on the input to see if it's worth hitting the api
    if (this.validateZipCodeInput(userZipCode)) {
      //Call on the submit function passed through props or a service
      this.props.getGeoDataReport(userZipCode);
    }

    //reset the form
    event.currentTarget.reset();
  };

  validateZipCodeInput = requestedZipCode => {
    if (requestedZipCode.length !== 5) {
      //update message
      console.log('Incorrect length for a US zipcode');
      return false;
    } else if (isNaN(requestedZipCode)) {
      //update message
      console.log('Not a number!');
      return false;
    }
    //update message to ''
    return true;
  };

  render() {
    return (
      <form className="zip-code-form" onSubmit={this.onSubmitZipCode}>
        <input
          name="zip-code"
          ref={this.zipCodeRef}
          type="text"
          autoComplete="off"
          placeholder="Please enter a zip code..."
        />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

ZipCodeForm.propTypes = {
  getGeoDataReport: PropTypes.func,
};

export default ZipCodeForm;
