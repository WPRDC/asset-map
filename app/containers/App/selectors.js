import { createSelector } from 'reselect';
import { initialState as globalInitialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || globalInitialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectDarkMode = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.darkMode,
  );

export { makeSelectLocation, makeSelectDarkMode };
