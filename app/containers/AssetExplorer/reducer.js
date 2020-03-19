/*
 *
 * AssetData reducer
 *
 * We're keeping the state used across all parts of the explorer here.
 * It should primarily keep the state around asset data from the backend.
 *
 */
import produce from 'immer';
import {
  GET_ASSET_DETAIL_FAILURE,
  GET_ASSET_DETAIL_REQUEST,
  GET_ASSET_DETAIL_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_NEXT_ASSET_LIST_PAGE_FAILURE,
  GET_NEXT_ASSET_LIST_PAGE_REQUEST,
  GET_NEXT_ASSET_LIST_PAGE_SUCCESS,
} from './constants';

export const initialState = {
  allAssetsGeoJSON: [],
  loadingAllAssetsGeoJSON: false,
  allAssets: [],
  loadingAssets: false,
  moreAssetsRemain: true,
  assetListOffset: 0,
  loadingAllAssets: false,
  currentAsset: undefined,
  loadingCurrentAsset: false,
  categories: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const infoPanelReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ASSET_DETAIL_REQUEST:
        draft.loadingCurrentAsset = true;
        break;
      case GET_ASSET_DETAIL_SUCCESS:
        draft.loadingCurrentAsset = false;
        draft.currentAsset = action.payload.assetData;
        break;
      case GET_ASSET_DETAIL_FAILURE:
        draft.loadingCurrentAsset = false;
        draft.currentAsset = null;
        break;

      case GET_CATEGORIES_SUCCESS:
        draft.categories = action.payload.data;
        break;
      case GET_CATEGORIES_REQUEST:
      case GET_CATEGORIES_FAILURE:
        draft.categories = undefined;
        break;

      case GET_NEXT_ASSET_LIST_PAGE_REQUEST:
        draft.loadingAssets = true;
        break;
      case GET_NEXT_ASSET_LIST_PAGE_SUCCESS:
        draft.loadingAssets = false;
        draft.moreAssetsRemain = action.payload.moreAssetsRemain;
        draft.allAssets = [...state.allAssets, ...action.payload.assets];
        draft.assetListOffset = action.payload.newOffset;
        break;
      case GET_NEXT_ASSET_LIST_PAGE_FAILURE:
        draft.loadingAssets = false;
    }
  });

export default infoPanelReducer;
