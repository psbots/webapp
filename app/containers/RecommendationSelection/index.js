/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ScreenSelector from 'components/ScreenSelector';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [
        'https://cdn.pttrns.com/591/7530_f.jpg',
        'https://cdn.pttrns.com/591/7525_f.jpg',
        'https://cdn.pttrns.com/501/6842_f.jpg',
        'https://cdn.pttrns.com/557/6737_f.jpg',
        'https://cdn.pttrns.com/86/7071_f.jpg',
      ],
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="container-fluid pb-5 mb-5">
          <div
            className="justify-content-sm-center row step-heading"
            style={{
              background: '#f5f5f5',
              padding: '5rem 0',
            }}
          >
            <div className="col col-sm-8">
              <h2>Pick 5 of your Favorite Options</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="container mt-5">
            <div className="justify-content-sm-center row">
              {this.state.imageArr.map((i) => (
                <div className="col col-md-2">
                  <div className="screenShotImageContainer">
                    <ScreenSelector imageUrl={i} />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>


        <div className="fixed-bottom py-3 btm-fixed text-center px-5">
          <button className="btn btn-primary">Next Step
            <i className="ion-chevron-right ml-3 mr-2"></i>
          </button>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};

export function mapDispatchToProps(dispatch) {
  return {
    simply: () => dispatch(),
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: (evt) => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
