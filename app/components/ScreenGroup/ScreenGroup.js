import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './style.css';

export default class ScreenGroup extends Component {
  render() {
    return (
      <div className="row justify-content-sm-center">
        <div className="col col-md-3">
          <div className="screenShotImageContainer">
            <ScreenSelector/>
          </div>
        </div>
      </div>
    )
  }
}
