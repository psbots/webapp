import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class CardBlockInfo extends Component { //eslint-disable-line
  render() {
    const { title, information, meta } = this.props;
    return (
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{information}</p>
        <p className="card-text"><small className="text-muted">{meta}</small></p>
      </div>
    );
  }
}


CardBlockInfo.propTypes = {
  title: PropTypes.String,
  information: PropTypes.String,
  meta: PropTypes.String,
};
