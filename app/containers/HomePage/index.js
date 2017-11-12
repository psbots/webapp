/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.css';
import UXCard from '../../components/UXComponents/CardGroup';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>CopraML</title>
          <meta name="description" content="Monsoon is coming" />
        </Helmet>
        <div className="text-center back-img--things">
          <div className="copraLogo"><span role="img" aria-label="myran" >🌴</span> Copra<span>ML</span> <i className="flash-div ion-flash mx-3"></i> <span className="wireframe--logo">wireframer</span></div>
          <h1 className="hero-headline">Build App Prototypes using the power of AI.</h1>
          <Link to="/create" className="btn btn-primary">Create your prototype <i className="ion-chevron-right mx-2"></i></Link>
        </div>
        <div className="row justify-content-sm-center ">
          <div className="col-md-3">
            <UXCard />
          </div>
        </div>
      </article>
    );
  }
}
