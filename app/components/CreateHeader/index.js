import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateHeader extends Component { //eslint-disable-line
  render() {
    const { heading, subheading } = this.props;
    return (
      <div
        className="justify-content-sm-center row"
        style={{
          background: '#f5f5f5',
          padding: '5rem 0',
        }}
      >
        <div className="col col-sm-8 text-center">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
      </div>
    );
  }
}

CreateHeader.propTypes = {
  heading: PropTypes.String,
  subheading: PropTypes.String,
};
