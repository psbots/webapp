/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import StepOne from 'containers/CategorySelection/Loadable';
import StepTwo from 'containers/RecommendationSelection/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HeaderNavBar from 'components/HeaderNavBar';

const AppWrapper = styled.div`
  width: 100%;
  height:100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - CopraML"
        defaultTitle="CopraML"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <HeaderNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/step1" component={StepOne} />
        <Route exact path="/step2" component={StepTwo} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
