import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

export default class HeaderNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/"><span role="img" aria-label="myran" >🌴</span> Copra<span>ML</span></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
      </Navbar>
    );
  }
}
