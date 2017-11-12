import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
export default class UserAvatarProfile extends Component { //eslint-disable-line
  render() {
    const { name, avatarUrl } = this.props;
    return (
      <div className="avatarGroup card-block">
        <div className="avatarGroup--image">
          <img alt="" className="img-responsive" src={avatarUrl} />
        </div>
        <div className="avatarGroup--info">
          <span className="info--name">{name}</span>
        </div>
      </div>
    );
  }
}

UserAvatarProfile.propTypes = {
  name: PropTypes.String,
  avatarUrl: PropTypes.String,
};
