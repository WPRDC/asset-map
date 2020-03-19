import { MAPS_API_ENDPOINT } from './settings';

export function cartoInstantiationParams(id, sql) {
  return {
    layers: [
      {
        id,
        options: {
          sql,
        },
      },
    ],
  };
}

export function extractCartoTileUrls(data) {
  return data.metadata.tilejson.vector.tiles;
}

/**
 * Generates carto vector source from local layer file
 * @param layer
 * @returns {Promise<any>}
 */
export function generateCartoVectorSource(layer) {
  const config = encodeURIComponent(
    JSON.stringify(cartoInstantiationParams(layer.id, layer.source.sql)),
  );
  return new Promise((resolve, reject) => {
    fetch(`${MAPS_API_ENDPOINT}?config=${config}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json(), error => reject(error))
      .then(
        data => {
          resolve({
            [layer.id]: {
              type: layer.type,
              tiles: extractCartoTileUrls(data),
              minzoom: layer.source.minzoom || 0,
              maxzoom: layer.source.maxzoom || 22,
            },
          });
        },
        error => reject(error),
      );
  });
}

export function fetchCartoVectorSource(
  id,
  sql,
  type = 'vector',
  minzoom = 0,
  maxzoom = 22,
) {
  const config = encodeURIComponent(
    JSON.stringify(cartoInstantiationParams(id, sql)),
  );
  return new Promise((resolve, reject) => {
    fetch(`${MAPS_API_ENDPOINT}?config=${config}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json(), error => reject(error))
      .then(
        data => {
          resolve({
            type,
            tiles: extractCartoTileUrls(data),
            minzoom,
            maxzoom,
          });
        },
        error => reject(error),
      );
  });
}

export function extractFeatureFromEvent(event) {
  if (event && event.features && event.features.length) {
    return event.features[0];
  }
  return undefined;
}
