/*
 *
 * AssetExplorer actions
 *
 */

import {
  GET_ALL_ASSETS_FAILURE,
  GET_ALL_ASSETS_REQUEST,
  GET_ALL_ASSETS_SUCCESS,
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

export function getAllAssetsRequest() {
  return { type: GET_ALL_ASSETS_REQUEST };
}

export function getAllAssetsFailure(errorMsg) {
  return {
    type: GET_ALL_ASSETS_FAILURE,
    payload: { errorMsg },
  };
}

export function getAllAssetsSuccess(assets) {
  return {
    type: GET_ALL_ASSETS_SUCCESS,
    payload: { assets },
  };
}

export function getAssetDetailsRequest(assetId) {
  return {
    type: GET_ASSET_DETAIL_REQUEST,
    payload: { assetId },
  };
}

export function getAssetDetailsSuccess(assetData) {
  return {
    type: GET_ASSET_DETAIL_SUCCESS,
    payload: { assetData },
  };
}

export function getAssetDetailsFailure(errorMsg) {
  return {
    type: GET_ASSET_DETAIL_FAILURE,
    payload: { errorMsg },
  };
}

export function getNextAssetPageRequest(offset) {
  console.log('action ', offset);
  return {
    type: GET_NEXT_ASSET_LIST_PAGE_REQUEST,
    payload: {
      offset,
    },
  };
}

export function getNextAssetPageFailure(errorMsg) {
  return {
    type: GET_NEXT_ASSET_LIST_PAGE_FAILURE,
    payload: { errorMsg },
  };
}

export function getNextAssetPageSuccess(assets, newOffset, moreAssetsRemain) {
  return {
    type: GET_NEXT_ASSET_LIST_PAGE_SUCCESS,
    payload: { assets, newOffset, moreAssetsRemain },
  };
}

export function getCategoriesRequest() {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
}

export function getCategoriesFailure(errorMsg) {
  return {
    type: GET_CATEGORIES_FAILURE,
    payload: { errorMsg },
  };
}

export function getCategoriesSuccess(data) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: { data },
  };
}
