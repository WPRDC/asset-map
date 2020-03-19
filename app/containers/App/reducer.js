/*
 *
 * Global reducer
 *
 */
import produce from 'immer';

import { SET_DARK_MODE } from './constants';

// Try to get OS dark mode preferences
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const initialState = {
  darkMode: prefersDarkMode,
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_DARK_MODE:
        console.log(action.payload);
        draft.darkMode = action.payload.on;
        break;
    }
  });

export default globalReducer;
