/**
 *
 * Global Actions
 *
 */

import { SET_DARK_MODE } from './constants';

export function setDarkMode(on) {
  return {
    type: SET_DARK_MODE,
    payload: { on },
  };
}
