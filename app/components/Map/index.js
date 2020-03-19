/**
 *
 * Map
 *
 */

import React, { useEffect, useState } from 'react';
import InteractiveMap, {
  StaticMap,
  Source,
  Layer,
  NavigationControl,
} from 'react-map-gl';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { MAPBOX_API_TOKEN } from '../../settings';
import {
  DEFAULT_VIEWPORT,
  basemaps,
  CARTO_SQL,
  assetLayer,
  categoryColors,
} from './settings';
import { extractFeatureFromEvent, fetchCartoVectorSource } from './utils';
import { categorySchema } from '../../schemas';
import MapFilter from '../MapFilter';
import PopUp from './PopUp';
import Legend from './Legend';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const ControlDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

function reduceDefaultCategories(acc, cur) {
  return { ...acc, [cur.name]: true };
}

function makeAssetFilter(newFilters) {
  const filterCats = Object.entries(newFilters)
    .filter(([filter, value]) => value)
    .map(([filter, value]) => filter);

  return ['in', ['get', 'category'], ['literal', filterCats]];
}

function Map({
  defaultViewport,
  sources,
  layers,
  isStatic,
  darkMode,
  children,
  onAssetClick,
  categories,
}) {
  const ReactMapGL = isStatic ? StaticMap : InteractiveMap;

  const startingViewport = { ...DEFAULT_VIEWPORT, ...defaultViewport };
  const [assetSource, setAssetSource] = useState(undefined);
  const [viewport, setViewport] = useState(startingViewport);
  const mapStyle = darkMode ? basemaps.dark : basemaps.light;

  const [popup, setPopup] = useState(undefined);
  const [popupFeature, setPopupFeature] = useState(undefined);

  const [filters, setFilters] = useState(
    categories ? categories.reduce(reduceDefaultCategories, {}) : undefined,
  );

  const [assetFilter, setAssetFilter] = useState([]);

  useEffect(() => {
    if (categories) {
      const newFilters = categories.reduce(reduceDefaultCategories, {});
      setFilters(newFilters);
      setAssetFilter(makeAssetFilter(newFilters));
    }
  }, [categories]);

  useEffect(() => {
    fetchCartoVectorSource(
      'assets',
      CARTO_SQL,
      // eslint-disable-next-line no-console
    ).then(setAssetSource, err => console.error('CARTO', err));
  }, []);

  function closePopup() {
    setPopupFeature(undefined);
    setPopup(undefined);
  }

  function handleHover(event) {
    const feature = extractFeatureFromEvent(event);
    if (feature && feature.properties.id !== popupFeature) {
      setPopupFeature(feature.properties.id);
      const [lng, lat] = event.lngLat;
      setPopup(
        <PopUp
          name={feature.properties.name}
          type={feature.properties.asset_type_title}
          lat={lat}
          lng={lng}
          onClose={closePopup}
        />,
      );
    }
    if (!feature) {
      setPopup(undefined);
      setPopupFeature(undefined);
    }
  }

  function handleClick(event) {
    const feature = extractFeatureFromEvent(event);
    if (feature) {
      onAssetClick(feature.properties.id);
    }
  }

  function handleFilterChange(newFilters) {
    // {category.name: bool}
    setFilters(newFilters);
    setAssetFilter(makeAssetFilter(newFilters));
  }

  return (
    <ReactMapGL
      mapboxApiAccessToken={MAPBOX_API_TOKEN}
      {...viewport}
      onViewportChange={v =>
        setViewport(Object.assign({}, v, { width: '100%', height: '100%' }))
      }
      mapStyle={mapStyle}
      onHover={handleHover}
      onClick={handleClick}
      interactiveLayerIds={['asset-points']}
    >
      {!!assetSource && (
        <Source {...assetSource}>
          <Layer {...assetLayer} filter={assetFilter} />
        </Source>
      )}

      {sources.map(source => (
        <Source {...source} />
      ))}

      {layers.map(layer => (
        <Layer {...layer} />
      ))}

      {children /* todo: ¿tightly define what goes in the map? */}

      {popup}
      <ControlDiv>
        <NavigationControl />
      </ControlDiv>
      {!!categories && !!filters && (
        <MapFilter
          categories={categories}
          onChange={handleFilterChange}
          filters={filters}
        />
      )}
      {!!categories && !!filters && (
        <Legend colors={categoryColors} filters={filters} />
      )}
    </ReactMapGL>
  );
}

Map.propTypes = {
  defaultViewport: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
  }),
  sources: PropTypes.arrayOf(PropTypes.object),
  layers: PropTypes.arrayOf(PropTypes.object),
  isStatic: PropTypes.bool,
  darkMode: PropTypes.bool,
  children: PropTypes.node,
  onAssetClick: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.shape(categorySchema)),
};

Map.defaultProps = {
  sources: [],
  layers: [],
};

export default Map;
