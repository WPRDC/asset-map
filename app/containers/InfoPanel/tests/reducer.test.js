import produce from 'immer';
import infoPanelReducer from '../reducer';
import { closeInfoPanel, openInfoPanel } from '../actions';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('infoPanelReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isOpen: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(infoPanelReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle closeInfoPanel correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isOpen = false;
    });

    expect(infoPanelReducer(state, closeInfoPanel())).toEqual(expectedResult);
  });

  it('should handle openInfoPanel correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isOpen = true;
    });

    expect(infoPanelReducer(state, openInfoPanel())).toEqual(expectedResult);
  });
});
