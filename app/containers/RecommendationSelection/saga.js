/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { storeCategoryImage } from './actions';
import { makeSelectCategoryName } from './selectors';
import { GET_IMAGE_BY_CATEGORY } from './constants';

/**
 * Github repos request/response handler
 */
export function* getImages() {
  // Select username from store
  const categoryName = yield select(makeSelectCategoryName());
  const requestURL = 'http://172.16.4.81:8000/get_image_by_category/';
  try {
    // Call our request helper (see 'utils/request')
    const postRequest = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        category: categoryName,
      }),
    });
    if (postRequest.status === 'success') {
      yield put(storeCategoryImage(postRequest.imgList));
    }
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* imageCategoryData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_IMAGE_BY_CATEGORY, getImages);
}
