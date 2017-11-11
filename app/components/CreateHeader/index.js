import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import './style.css';

export default class CreateHeader extends Component { //eslint-disable-line
  render() {
    const { heading, subheading, isProgress, progressMax, progressValue } = this.props;
    return (
      <div>
        <div
          className="justify-content-sm-center row step-heading"
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
        {
          isProgress ? <div className="row"><div style={{ width: '100%' }}><Progress style={{ height: '1px' }} value={progressValue} max={progressMax} /></div></div> : null
        }
      </div>
    );
  }
}

CreateHeader.propTypes = {
  heading: PropTypes.String,
  subheading: PropTypes.String,
  isProgress: PropTypes.bool,
  progressMax: PropTypes.number,
  progressValue: PropTypes.number,
};
