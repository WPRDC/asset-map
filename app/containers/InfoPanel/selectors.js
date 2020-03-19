import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the infoPanel state domain
 */

const selectInfoPanelDomain = state => state.infoPanel || initialState;

/**
 * Other specific selectors
 */
const makeSelectInfoPanelIsOpen = () =>
  createSelector(
    selectInfoPanelDomain,
    substate => substate.isOpen,
  );

/**
 * Default selector used by InfoPanel
 */
const makeSelectInfoPanel = () =>
  createSelector(
    selectInfoPanelDomain,
    substate => substate,
  );

export default makeSelectInfoPanel;
export { selectInfoPanelDomain, makeSelectInfoPanelIsOpen };
