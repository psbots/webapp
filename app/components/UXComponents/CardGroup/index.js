import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
// import './style.css'
export default class CardGroup extends Component { //eslint-disable-line
  render() {
    return (
      <div className="card-list">
        <Card type="ListView" />
        <Card type="ListView" />
        <Card type="ListView" />
        <Card type="ListView" bottomMargin />
        <Card type="CardView" bottomMargin raised />
        <Card type="CardView" CardInfo bottomMargin userProfile topImageBanner />
        <Card type="CardView" CardInfo bottomMargin userProfile actions />
        <Card type="CardView" topImageBanner userProfile actions />
      </div>
    );
  }
}

CardGroup.propTypes = {
  name: PropTypes.String,
  avatarUrl: PropTypes.String,
};
