/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

import CreateHeader from 'components/CreateHeader';

import injectReducer from 'utils/injectReducer';
import { changeCategory } from './actions';
import reducer from './reducer';
import './style.css';

export class CategorySelection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 'socialapp',
          name: 'Social Network',
          image: 'http://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          relatedApps: 'Facebook, Twitter',
        }, {
          id: 'travelapp',
          name: 'Travel Listing App',
          image: 'https://appinstitute.com/wp-content/uploads/2014/12/Make-The-Most-Of-Your-Trip-With-These-Travel-Apps.png',
          description: 'Sed do eiusmod tempor incididunt',
          relatedApps: 'Airbnb, Expedia',
        }, {
          id: 'bookapp',
          name: 'Books & Education',
          image: 'http://blog.gettinghired.com/Portals/2/SunBlogNuke/162/Exciting%20job.jpg',
          description: 'Apps that are a source of information',
          relatedApps: 'Safari, Quora, GoodReads',
        },
        {
          id: 'entapp',
          name: 'Entertainment App',
          image: 'http://blog.gettinghired.com/Portals/2/SunBlogNuke/162/Exciting%20job.jpg',
          description: 'Apps like ',
          relatedApps: 'Netflix, Spotify, Shazam',
        },
      ],
    };
  }

  render() {
    const { saveCategory } = this.props;
    return (
      <article>
        <Helmet>
          <title>Select Category</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="container-fluid">
          <CreateHeader heading="Select Category for your app" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <div className="container mt-5">
            <div className="justify-content-sm-center row">
              {this.state.categories.map((category) => (
                <div className="col col-md-3 text-left">
                  <Link to={`/create/${category.id}`} className="category-card" onClick={() => { saveCategory(category.id); }}>
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        style={{
                          height: '140px',
                        }}
                        src={category.image}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{category.name}</CardTitle>
                        <CardText>{category.description}</CardText>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

CategorySelection.propTypes = {
  saveCategory: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    saveCategory: (name) => dispatch(changeCategory(name)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categorySelection', reducer });

export default compose(withReducer, withConnect)(CategorySelection);
