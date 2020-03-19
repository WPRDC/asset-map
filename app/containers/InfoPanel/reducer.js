/*
 *
 * InfoPanel reducer
 *
 */
import produce from 'immer';
import { CLOSE_INFO_PANEL, DEFAULT_ACTION, OPEN_INFO_PANEL } from './constants';

export const initialState = {
  isOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const infoPanelReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_INFO_PANEL:
        draft.isOpen = true;
        break;
      case CLOSE_INFO_PANEL:
        draft.isOpen = false;
    }
  });

export default infoPanelReducer;
