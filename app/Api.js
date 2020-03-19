/**
 *
 * Api.js
 *
 * Functions that handle communicating with backend.
 *
 */

const HOST = 'https://wiki.wprdc.org';

/**
 * Enum for API endpoints.
 * @readonly
 * @enum string}
 */
const Endpoints = {
  ASSETS: 'assets',
  CATEGORIES: 'categories',
  ASSET_TYPES: 'asset-types',
};

/**
 * Enum for available API methods.
 * @readonly
 * @enum string}
 */
const Methods = {
  GET: 'GET',
  // todo: remove these if we decide to not have data entry from this tool
  // POST: 'POST',
  // PUT: 'PUT',
  // DELETE: 'DELETE',
};

/**
 * Default headers to apply to all requests
 *
 * @type {{string: string}}
 */
const baseHeaders = {};

function serializeParams(params) {
  if (!params || !Object.keys(params)) return '';
  return `?${Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')}`;
}

/**
 * Base api call function.
 *
 * @param {Endpoints} endpoint - target for request
 * @param {Methods} method - HTTP method to use
 * @param {Object} options - optional parameters
 * @param {string | number} options.id - id of resource at endpoint to be retrieved
 * @param {Object} options.params - url parameters
 * @param {Object} options.body - body data to supply to fetch request
 * @param {Object} options.headers - HTTP headers to supply to fetch
 * @param {Object} options.fetchInit - catchall for other fetch init options
 * @returns {Promise<Response>}
 */
function callApi(
  endpoint,
  method,
  { id, params, body, headers, fetchInit } = {
    id: null,
    params: {},
    body: null,
    headers: {},
    fetchInit: {},
  },
) {
  let noBody = false;
  if ([Methods.GET].includes(method)) {
    // eslint-disable-next-line no-console
    console.warn('HTTP body can not be part of GET requests');
    noBody = true;
  }

  const idPath = [null, undefined].includes(id) ? '' : `${id}/`;
  const urlParams = serializeParams(params);
  const url = `${HOST}/${endpoint}/${idPath}${urlParams}`;

  return fetch(url, {
    ...fetchInit,
    ...{
      method,
      headers: { ...baseHeaders, ...headers },
      body: noBody ? null : JSON.stringify(body),
    },
  });
}

/**
 * Helper API functions
 *  these are the primary interface to the API
 *  and should return a call to `callApi()`
 * */

/**
 * Calls api endpoint to return all assets.
 *
 * @param {object} params - query params
 * @returns {Promise<Response>}
 */
function getAssets(params) {
  return callApi(Endpoints.ASSETS, Methods.get, { params });
}

/**
 * Calls api endpoint to return single asset by ID
 *
 * @param {string | number} id - id of asset to be requested
 * @returns {Promise<Response>}
 */
function getAssetById(id) {
  return callApi(Endpoints.ASSETS, Methods.get, { id });
}

function getCategories(){
  return callApi(Endpoints.CATEGORIES, Methods.get, {})
}

export default { getAssets, getAssetById, getCategories };
