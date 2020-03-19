/*
 *
 * InfoPanel actions
 *
 */

import { OPEN_INFO_PANEL, CLOSE_INFO_PANEL } from './constants';

export function openInfoPanel() {
  return {
    type: OPEN_INFO_PANEL,
  };
}

export function closeInfoPanel() {
  return {
    type: CLOSE_INFO_PANEL,
  };
}
