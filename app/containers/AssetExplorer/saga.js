import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects';
import {
  GET_ALL_ASSETS_REQUEST,
  GET_ASSET_DETAIL_REQUEST,
  GET_CATEGORIES_REQUEST,
  GET_NEXT_ASSET_LIST_PAGE_REQUEST,
} from './constants';
import Api from '../../Api';
import {
  getAllAssetsFailure,
  getAllAssetsSuccess,
  getAssetDetailsFailure,
  getAssetDetailsSuccess,
  getCategoriesFailure,
  getCategoriesSuccess,
  getNextAssetPageFailure,
  getNextAssetPageSuccess,
} from './actions';

const PAGE_SIZE = 40;

export function* fetchAssets(/* action */) {
  try {
    const response = yield call(() => Api.getAssets(true));
    if (response.ok) {
      const data = yield response.json();
      yield put(getAllAssetsSuccess(data));
    } else {
      // eslint-disable-next-line no-console
      console.error(response.statusText);
      yield put(getAllAssetsFailure('whoops')); // todo: set this once we decide how to report errors on the backend
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    yield put(getAllAssetsFailure(err));
  }
}

export function* fetchSingleAsset(action) {
  const { assetId } = action.payload;
  try {
    const response = yield call(() => Api.getAssetById(assetId));
    if (response.ok) {
      const data = yield response.json();
      yield put(getAssetDetailsSuccess(data));
    } else {
      // eslint-disable-next-line no-console
      console.error(response.statusText);
      yield put(getAssetDetailsFailure('whoops')); // todo: set this once we decide how to report errors on the backend
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    yield put(getAssetDetailsFailure(err));
  }
}

export function* fetchNextAssetPage(action) {
  console.log('fetchin');
  const { offset } = action.payload;
  try {
    const response = yield call(() =>
      Api.getAssets({ limit: PAGE_SIZE, offset }),
    );
    if (response.ok) {
      const data = yield response.json();
      yield put(
        getNextAssetPageSuccess(data.results, offset + PAGE_SIZE, !!data.next),
      );
    } else {
      yield put(getNextAssetPageFailure(response.text));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    yield put(getNextAssetPageFailure(err));
  }
}

export function* fetchCategories(/* action */) {
  try {
    const response = yield call(() => Api.getCategories());
    if (response.ok) {
      const data = yield response.json();
      yield put(getCategoriesSuccess(data));
    } else {
      yield put(getCategoriesFailure(response.text));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    yield put(getCategoriesFailure(err));
  }
}

export default function* assetExplorerSaga() {
  yield all([
    takeLatest(GET_ALL_ASSETS_REQUEST, fetchAssets),
    takeLatest(GET_ASSET_DETAIL_REQUEST, fetchSingleAsset),
    takeLatest(GET_NEXT_ASSET_LIST_PAGE_REQUEST, fetchNextAssetPage),
    takeLatest(GET_CATEGORIES_REQUEST, fetchCategories),
  ]);
}
