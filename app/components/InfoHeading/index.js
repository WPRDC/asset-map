/**
 *
 * InfoHeading
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PanelDiv from '../PanelDiv';
import AssetTypesList from './AssetTypesLine';
import { assetTypeSchema } from '../../schemas';
import StatusIconList from '../StatusIconList';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function InfoHeading({ name, address, assetTypes, statuses }) {
  console.log(statuses);
  return (
    <PanelDiv>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="subtitle2">{address}</Typography>
      <AssetTypesList assetTypes={assetTypes} />
      <StatusIconList items={statuses} />
    </PanelDiv>
  );
}

InfoHeading.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  assetTypes: PropTypes.arrayOf(PropTypes.shape(assetTypeSchema)).isRequired,
  statuses: PropTypes.array,
};

export default memo(InfoHeading);
