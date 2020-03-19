/**
 *
 * PanelDiv
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';

function PanelDiv({ children, boxProps }) {
  const theme = useTheme();
  const defaultBoxProps = {
    p: theme.surfacePadding,
    borderBottom: `0.5px ridge ${theme.palette.text.hint}`,
  };
  return <Box {...{ ...defaultBoxProps, ...boxProps }}>{children}</Box>;
}

PanelDiv.propTypes = {
  children: PropTypes.node,
  boxProps: PropTypes.shape(Box.propTypes),
};

export default memo(PanelDiv);
