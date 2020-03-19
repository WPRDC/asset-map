import { openInfoPanel, closeInfoPanel } from '../actions';
import { OPEN_INFO_PANEL, CLOSE_INFO_PANEL } from '../constants';

describe('InfoPanel actions', () => {
  describe('Open Action', () => {
    it('has a type of OPEN_INFO_PANEL', () => {
      const expected = {
        type: OPEN_INFO_PANEL,
      };
      expect(openInfoPanel()).toEqual(expected);
    });
  });
  describe('Close Action', () => {
    it('has a type of CLOSE_INFO_PANEL', () => {
      const expected = {
        type: CLOSE_INFO_PANEL,
      };
      expect(closeInfoPanel()).toEqual(expected);
    });
  });
});
