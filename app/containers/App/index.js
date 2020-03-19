/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/AssetExplorer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemProvider,
} from '@material-ui/core/styles';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppWrapper from './AppWrapper';
import ContentWrapper from './ContentWrapper';
import switchableTheme from '../../theme';
import { setDarkMode } from './actions';
import { makeSelectDarkMode } from './selectors';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';

function App({ darkMode, handleDarkModeChange }) {
  useInjectReducer({ key: 'global', reducer });
  // const theme = React.useMemo(() => switchableTheme(darkMode), [darkMode]);
  const theme = switchableTheme(darkMode);
  return (
    <StylesProvider injectFirst>
      <MuiThemProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {/* Actual rendered stuff */}
          <AppWrapper>
            <Header
              darkMode={darkMode}
              onDarkModeChange={handleDarkModeChange}
            />
            <ContentWrapper>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </ContentWrapper>
            <Footer />
            <GlobalStyle />
            <CssBaseline />
          </AppWrapper>
          {/* End actual rendered stuff */}
        </ThemeProvider>
      </MuiThemProvider>
    </StylesProvider>
  );
}

App.propTypes = {
  darkMode: PropTypes.bool,
  handleDarkModeChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  darkMode: makeSelectDarkMode(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleDarkModeChange: darkModeOn => dispatch(setDarkMode(darkModeOn)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
