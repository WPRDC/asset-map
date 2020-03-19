/**
 *
 * SideNav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SideSheet from '../SideSheet';
import AssetList from '../AssetList';

function SideNav() {
  return (
    <SideSheet anchor="left" open>
      <AssetList />
    </SideSheet>
  );
}

SideNav.propTypes = {};

export default SideNav;
