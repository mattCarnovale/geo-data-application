import React, { Component } from 'react';
import '../css/styles.css';

class ZipCodeForm extends Component {
  zipCodeRef = React.createRef();

  onSubmitZipCode = event => {
    event.preventDefault();
    //Set a const var to capture the ref
    const userZipCode = this.zipCodeRef.current.value;
    console.log(userZipCode);

    //Do some input checking on the input to see if it's worth hitting the api

    //Call on the submit function passed through props or a service

    //reset the form
    event.currentTarget.reset();
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

export default ZipCodeForm;
