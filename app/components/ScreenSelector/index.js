import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import './ScreenSelectorStyle.css';

export default class ScreenSelector extends Component {
  state = {
    selected: false,
  };
  render() {
    let classnames = 'ScreenSelectorCard';
    if (this.state.selected) {
      classnames = 'ScreenSelectorCard ScreenSelected';
    }
    return (
      <div>
        <Card
          onClick={() => this.setState({
            selected: !this.state.selected,
          })}
          className={classnames}
          inverse
        >
          <CardImg top width="100%" src={this.props.imageUrl} alt="Card image cap" />
          {
            this.state.selected ? <CardImgOverlay><h1>Selected</h1></CardImgOverlay> : null
          }
        </Card>
      </div>
    );
  }
}

ScreenSelector.propTypes = {
  imageUrl: PropTypes.String,
};
