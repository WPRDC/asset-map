export const basemaps = {
  dark: 'mapbox://styles/mapbox/dark-v10',
  light: 'mapbox://styles/mapbox/light-v10',
  streets: 'mapbox://styles/mapbox/streets-v11',
};

export const DEFAULT_VIEWPORT = {
  width: '100%',
  height: '100%',
  latitude: 40.440624,
  longitude: -79.995888,
  zoom: 12,
};

export const CARTO_USER = 'wprdc';
export const MAPS_API_ENDPOINT = `https://${CARTO_USER}.carto.com/api/v1/map`;

export const categoryColors = {
  'non-profit': '#a6cee3',
  transportation: '#b2df8a',
  business: '#fb9a99',
  housing: '#fdbf6f',
  health: '#cab2d6',
  food: '#ffff99',
  'education/youth': '#b15928',
  'community-center': '#1f78b4',
  civic: '#33a02c',
};

const colorExpression = [
  'match',
  ['get', 'category'],
  ...Object.entries(categoryColors).reduce((expression, [cat, color]) => [
    ...expression,
    [cat],
    color,
  ]),
  'hsl(0, 0%, 0%)',
];

// get a better query for this
export const CARTO_SQL = `SELECT id, cartodb_id, name, asset_type, asset_type_title, category, the_geom, the_geom_webmercator FROM wprdc.assets`;

export const assetLayer = {
  id: 'asset-points',
  source: 'assets',
  'source-layer': 'assets',
  type: 'circle',
  paint: {
    'circle-radius': [
      'interpolate',
      ['cubic-bezier', 0.5, 0, 0.5, 1],
      ['zoom'],
      8,
      1,
      22,
      12,
    ],
    'circle-color': colorExpression,
  },
};

export const DEFAULT_BASEMAP = basemaps.dark;
