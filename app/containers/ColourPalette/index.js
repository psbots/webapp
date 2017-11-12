/*
 * ColourPalette
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CreateHeader from 'components/CreateHeader';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { saveColourPalette } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';

export class ColourPalette extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      colourPalette: ['red', 'green', 'blue', 'yellow'],
      activePalette: null,
    };
    this.getTiles = this.getTiles.bind(this);
    this.renderColourPalettes = this.renderColourPalettes.bind(this);
    this.setActivePalette = this.setActivePalette.bind(this);
  }
  componentDidMount() {
  }

  getTiles() {
    const tiles = [];
    for (let i = 0; i < 9; i += 1) {
      tiles.push((
        <div
          className="tile"
          key={i}
          style={{
            opacity: (i + 1) / 10,
          }}
        />
      ));
    }
    return tiles;
  }

  setActivePalette(colour) {
    this.setState({
      activePalette: colour,
    });
  }

  renderColourPalettes() {
    const palettes = [];
    this.state.colourPalette.map((palette, i) => palettes.push((
      <div //eslint-disable-line
        className={this.state.activePalette === palette ? 'palette-board clearfix active' : 'palette-board clearfix'}
        key={i} //eslint-disable-line
        role="button"
        style={{
          backgroundColor: palette,
        }}
        onClick={() => {
          this.setActivePalette(palette);
          this.props.selectPalette(palette);
        }}
      >
        {
          this.getTiles()
        }
      </div>
      ))
    );
    return palettes;
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="container-fluid">
          <CreateHeader heading="Choose your Colour" subheading="Let us know the colours you would love to see in your App. This would make it more elegant" />
          <div className="container mt-5 text-center">
            {
              this.renderColourPalettes()
            }
          </div>
          <div className="container mt-5">
            <div className="justify-content-sm-center row">
              <div className="col text-center">
                <button className="btn btn-primary">Next Step
                  <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

ColourPalette.propTypes = {
  selectPalette: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    selectPalette: (colour) => dispatch(saveColourPalette(colour)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categorySelection', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ColourPalette);
