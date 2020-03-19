/*
 * AssetExplorer
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import MainPane from './MainPane';
import SidePane from './SidePane';
import InfoPanel from '../InfoPanel';
import {
  makeSelectAllAssets,
  makeSelectAssetCategories,
  makeSelectExplorerCurrentAsset,
  makeSelectAssetListOffset,
  makeSelectLoadingAssets,
  makeSelectMoreAssetsRemain,
} from './selectors';
import {
  getAssetDetailsRequest,
  getCategoriesRequest,
  getNextAssetPageRequest,
} from './actions';
import Map from '../../components/Map';
import { makeSelectDarkMode } from '../App/selectors';
import { categorySchema } from '../../schemas';
import AssetList from '../../components/AssetList';
import SideSheet from '../../components/SideSheet';

function AssetExplorer({
  allAssets,
  getCategories,
  getAsset,
  categories,
  darkMode,
  assetListOffset,
  loadingAssets,
  moreAssetsRemain,
  getNextAssetPage,
}) {
  useInjectReducer({ key: 'assetExplorer', reducer });
  useInjectSaga({ key: 'assetExplorer', saga });

  /**
   * Initialization happens here
   */
  useEffect(() => {
    // load first page of assets for infinite list
    getNextAssetPage(0)();
    // load categories for use in map
    getCategories();
  }, []);

  return (
    <Wrapper>
      <SidePane>
        <SideSheet>
          <AssetList
            hasNextPage={moreAssetsRemain}
            isNextPageLoading={loadingAssets}
            items={allAssets}
            loadNextPage={getNextAssetPage(assetListOffset)}
            onAssetClick={getAsset}
          />
        </SideSheet>
      </SidePane>
      <MainPane>
        <Map
          darkMode={darkMode}
          onAssetClick={getAsset}
          categories={categories}
        />
      </MainPane>
      <SidePane>
        <InfoPanel />
      </SidePane>
    </Wrapper>
  );
}

AssetExplorer.propTypes = {
  allAssets: PropTypes.arrayOf(PropTypes.object),
  getAsset: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.shape(categorySchema)),

  assetListOffset: PropTypes.number,
  loadingAssets: PropTypes.bool,
  moreAssetsRemain: PropTypes.bool,
  getNextAssetPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  allAssets: makeSelectAllAssets(),
  currentAsset: makeSelectExplorerCurrentAsset(),
  categories: makeSelectAssetCategories(),
  darkMode: makeSelectDarkMode(),

  assetListOffset: makeSelectAssetListOffset(),
  loadingAssets: makeSelectLoadingAssets(),
  moreAssetsRemain: makeSelectMoreAssetsRemain(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAsset: assetId => dispatch(getAssetDetailsRequest(assetId)),
    getCategories: () => dispatch(getCategoriesRequest()),
    getNextAssetPage: nextOffset => () =>
      dispatch(getNextAssetPageRequest(nextOffset)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AssetExplorer);
