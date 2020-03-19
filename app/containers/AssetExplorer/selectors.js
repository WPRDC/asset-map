import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the infoPanel state domain
 */

const selectAssetExplorerDomain = state => state.assetExplorer || initialState;

/**
 * Other specific selectors
 */

const makeSelectAllAssets = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.allAssets,
  );

const makeSelectLoadingAllAssets = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.loadingAllAssets,
  );

const makeSelectExplorerCurrentAsset = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.currentAsset,
  );

const makeSelectExplorerLoadingCurrentAsset = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.loadingCurrentAsset,
  );

const makeSelectAssetCategories = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.categories,
  );

/*
 * Asset List Business
 */

const makeSelectAssetListOffset = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.assetListOffset,
  );

const makeSelectMoreAssetsRemain = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.moreAssetsRemain,
  );

const makeSelectLoadingAssets = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate.loadingAssets,
  );

/**
 * Default selector used by InfoPanel
 */
const makeSelectAssetExplorer = () =>
  createSelector(
    selectAssetExplorerDomain,
    substate => substate,
  );

export default makeSelectAssetExplorer;
export {
  selectAssetExplorerDomain,
  makeSelectAllAssets,
  makeSelectLoadingAllAssets,
  makeSelectExplorerCurrentAsset,
  makeSelectExplorerLoadingCurrentAsset,
  makeSelectAssetCategories,
  makeSelectAssetListOffset,
  makeSelectMoreAssetsRemain,
  makeSelectLoadingAssets,
};
