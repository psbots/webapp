/*
 * RecommendationSelection
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ScreenSelector from 'components/ScreenSelector';
import FBPreloader from 'components/FBPreloader';
import CreateHeader from 'components/CreateHeader';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { CATEGORY_IMAGE_URL } from 'containers/App/constants';
import { getImageByCategory, setSelectedImages } from './actions';
import { makeSelectCategoryImages } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';

export class RecommendationSelection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedScreens: [],
    };
    this.renderPreloader = this.renderPreloader.bind(this);
    this.clickScreenSelector = this.clickScreenSelector.bind(this);
    this.removeItem = this.removeItem.bind(this);
    props.fetchImageByCategory();
  }

  removeItem(index) {
    const newArray = this.state.selectedScreens.filter((_, i) => i !== index);
    this.setState({
      selectedScreens: newArray,
    });
  }

  clickScreenSelector(id) {
    const arrayPosition = this.state.selectedScreens.indexOf(id);
    if (arrayPosition === -1) {
      const currentState = this.state.selectedScreens;
      currentState.push(id);
      console.log(currentState);
      this.setState({ selectedScreens: currentState });
    } else {
      this.removeItem(arrayPosition);
    }
    this.props.saveSelectedImages(this.state.selectedScreens);
  }

  renderPreloader() {
    const loaderElements = [];
    for (let i = 0; i < 4; i += 1) {
      loaderElements.push((
        <div className="col col-md-2 ml-2 mr-2">
          <div className="screenShotImageContainer">
            <FBPreloader x={i * 10} />
          </div>
        </div>
      ));
    }
    return loaderElements;
  }

  render() {
    const { categoryImages } = this.props;
    return (
      <article>
        <Helmet>
          <title></title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="container-fluid pb-5 mb-5">
          <CreateHeader heading="Pick any 5 of your Favorite Options" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" isProgress progressMax="5" progressValue="3" />
          <div className="container mt-5">
            {
              categoryImages && categoryImages.length ? (
                <div className="justify-content-sm-center row">
                  {
                      categoryImages.map((image) => (
                        <div className="col col-md-2">
                          <div className="screenShotImageContainer">
                            <ScreenSelector imageUrl={`${CATEGORY_IMAGE_URL}/${image}.jpg`} toggleImageSelection={() => this.clickScreenSelector(image)} id={image} />
                          </div>
                        </div>
                    ))
                  }
                </div>
              ) : (
                <div className="justify-content-sm-center row">
                  {
                    this.renderPreloader()
                  }
                </div>
              )
            }
          </div>
        </div>
        <div className="fixed-bottom py-3 btm-fixed text-center px-5">
          {
            this.state.selectedScreens && this.state.selectedScreens.length >= 5 ? (
              <Link to="/create/palette">
                <button className="btn btn-primary">Next Step
                  <i className="ion-chevron-right ml-3 mr-2"></i>
                </button>
              </Link>
            ) : (
              <button className="btn btn-primary" disabled>Next Step
                <i className="ion-chevron-right ml-3 mr-2"></i>
              </button>
            )
          }
        </div>
      </article>
    );
  }
}

RecommendationSelection.propTypes = {
  fetchImageByCategory: PropTypes.func,
  categoryImages: PropTypes.array,
  saveSelectedImages: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchImageByCategory: () => dispatch(getImageByCategory()),
    saveSelectedImages: (images) => {
      console.log(images);
      dispatch(setSelectedImages(images));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  categoryImages: makeSelectCategoryImages(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categorySelection', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RecommendationSelection);
