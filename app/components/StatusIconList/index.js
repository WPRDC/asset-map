/**
 *
 * StatusIconList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
// import messages from './messages';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core';
import PanelDiv from '../PanelDiv';

function StatusIconList({ items }) {
  const theme = useTheme();

  const offMessage = (name, status, disableMsg) => {
    if (status) return name;
    return disableMsg || `Not ${name}`;
  };

  return (
    <Box pt={theme.itemSpacing * 2}>
      <Grid container spacing={1} alignContent="stretch">
        {items.map(({ name, icon: Icon, status, disabledMsg }) => (
          <Grid item key={name}>
            <Icon
              fontSize="large"
              color={status ? 'secondary' : 'disabled'}
              titleAccess={offMessage(name, status, disabledMsg)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

StatusIconList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      status: PropTypes.bool.isRequired,
      disabledMsg: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(StatusIconList);
