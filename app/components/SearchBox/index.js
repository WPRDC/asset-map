/**
 *
 * SearchBox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SearchBox({onChange}) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SearchBox.propTypes = {};

export default SearchBox;
