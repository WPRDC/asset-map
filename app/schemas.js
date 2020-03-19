/**
 *
 * schemas.js
 *
 * Definitions of the structure of the data coming from the backend.
 * We'll just use proptypes here for now so we can easily plug them
 * into our components proptypes.
 * todo: research for better standard for doing this - the answer probably involves typescript lol
 *
 */

import PropTypes from 'prop-types';

/**
 * Enum of localizability types
 * @readonly
 * @enum {string}
 */
const LocalizabilityTypes = {
  FIXED: 'FIX',
  MOBILE: 'MOB',
  VIRTUAL: 'VIR',
};

export const locationSchema = {
  type: PropTypes.oneOf(['Feature']),
  geometry: PropTypes.shape({
    type: PropTypes.oneOf([
      'Point',
      'Line',
      'Polygon',
      'MultiPoint',
      'MultiPolygon',
    ]).isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  properties: PropTypes.shape({
    name: PropTypes.string.isRequired,
    availableTransportation: PropTypes.string,
    parentLocation: PropTypes.shape(locationSchema),
  }).isRequired,
};

export const organizationSchema = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape(locationSchema),
};

export const assetTypeSchema = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const categorySchema = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const assetSchema = {
  name: PropTypes.string.isRequired,
  assetTypes: PropTypes.arrayOf(PropTypes.shape(assetTypeSchema)), // todo: define asset_type schema
  category: PropTypes.shape(categorySchema), // todo: define asset_type schema
  organization: PropTypes.shape(organizationSchema),
  email: PropTypes.string,
  phone: PropTypes.string,
  localizability: PropTypes.oneOf(Object.values(LocalizabilityTypes)),
  location: PropTypes.shape(locationSchema),
  url: PropTypes.string,
  hoursOfOperation: PropTypes.string,
  holidayHoursOfOperation: PropTypes.string,
  childFriendly: PropTypes.bool,
  capacity: PropTypes.number,
  accessibilityFeatures: PropTypes.array, // todo: what is this an array of?
  internetAccess: PropTypes.bool,
  wifiNetwork: PropTypes.string,
  computersAvailable: PropTypes.bool,
  services: PropTypes.array, // todo: array of what?
  openToPublic: PropTypes.bool,
  hardToCountPopulation: PropTypes.array, // todo: array of what?
  sensitive: PropTypes.bool,
  dateEntered: PropTypes.string,
  lastUpdated: PropTypes.string,
  dataSource: PropTypes.object, // todo: what is it's shape
};
