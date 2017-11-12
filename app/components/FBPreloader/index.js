import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader, { Rect } from 'react-content-loader';

const FBPreloader = (props) => (
  <ContentLoader height={300} speed={1} primaryColor={'#EEEEEE'} secondaryColor={'#F5F5F5'}>
    <Rect x={props.x} y={0} height={300} radius={3} width={200} />
  </ContentLoader>
);

FBPreloader.propTypes = {
  x: PropTypes.number,
};

export default FBPreloader;
