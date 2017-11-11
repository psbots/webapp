import React, { Component } from 'react';
import ScreenSelector from 'components/ScreenSelector';
import './style.css';

export default class ScreenGroup extends Component { //eslint-disable-line
  render() {
    return (
      <div className="row justify-content-sm-center">
        <div className="col col-md-3">
          <div className="screenShotImageContainer">
            <ScreenSelector />
          </div>
        </div>
      </div>
    );
  }
}
