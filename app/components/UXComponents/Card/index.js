import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UserAvatarProfile from '../UserAvatarProfile';
import CardBlockInfo from '../CardBlockInfo';
import './style.css';
const faker = require('faker/locale/en_US');
const squreImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fadad42fd%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fadad42fd%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
const imgPlaceholder = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22769%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20769%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fad8c54d2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A38pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fad8c54d2%22%3E%3Crect%20width%3D%22769%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22287.3046875%22%20y%3D%22107.4%22%3E769x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export default class Card extends Component { //eslint-disable-line
  render() {
    const { type, bottomMargin, userProfile, topImageBanner, raised, CardInfo, bottomImageBanner, actions } = this.props;
    const cardClasses = classnames('card', { 'mb-3': bottomMargin }, { 'card-shadow': raised });

    if (type === 'ListView') {
      return (
        <div className={cardClasses}>
          <div className="card-block media">
            <img alt="" className="d-flex align-self-center mr-3" src={squreImage} alt="Generic placeholder image" />
            <div className="media-body">
              <h5 className="mt-0">{faker.company.bsAdjective()} Inn</h5>
              <p>{faker.address.streetAddress()}</p>
            </div>
          </div>
        </div> 
      );
    }

    if (type === 'CardView') {
      return (
        <div className={cardClasses}>
          {
            userProfile ? <UserAvatarProfile name="Athul Suresh" avatarUrl="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" /> : null
          }
          {
            topImageBanner ? <img alt="" className="card-img-top" src={imgPlaceholder} /> : null
          }
          {
            CardInfo ? <CardBlockInfo information="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." /> : null
          }
          {
            bottomImageBanner ? <img className="card-img-bottom" src={imgPlaceholder} alt="Card image cap" /> : null 
          }
          {
            actions ? <div className="card-block"><a href="#" className="card-link"><i className="ion-ios-grid-view mr-2"></i> ACTION A</a><a href="#" className="card-link"><i className="ion-ios-grid-view mr-2"></i>ACTION B</a></div> : null
          }
        </div>
      );
    }
    return (
      <div>Specify Type</div>
    )
  }
}


Card.propTypes = {
  type: PropTypes.String,
  bottomMargin: PropTypes.bool,
  userProfile: PropTypes.bool,
  topImageBanner: PropTypes.bool,
  raised:PropTypes.bool,
  bottomImageBanner: PropTypes.bool,
  CardInfo: PropTypes.bool,
  actions: PropTypes.bool,
};
