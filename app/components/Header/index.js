/**
 *
 * Header
 *
 * App-level Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import MuiToolbar from '@material-ui/core/Toolbar';
import MuiAppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DarkModeIcon from '@material-ui/icons/Brightness3';
import LightModeIcon from '@material-ui/icons/BrightnessHigh';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '../Button';

const AppBar = styled(MuiAppBar)`
  //border: 2px solid red;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;

  ${({ theme }) => css`
    z-index: ${theme.zIndex.drawer + 1};
    height: ${theme.spacing(theme.headerHeight)}px;
  `}
`;

const Toolbar = styled(MuiToolbar)`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
`;

const TitleSection = styled.div`
  -ms-flex: 1 0 auto;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
`;

const MenuSection = styled.div`
  -ms-flex: 0 1 auto;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
`;

function Header({ darkMode, onDarkModeChange }) {
  return (
    <AppBar component="header" position="static">
      <Toolbar>
        <TitleSection>
          <Typography variant="h6">Asset Map</Typography>
        </TitleSection>
        <MenuSection>
          <IconButton onClick={() => onDarkModeChange(!darkMode)}>
            {!darkMode ? (
              <Tooltip title="Switch to Dark Mode">
                <DarkModeIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Switch to Light Mode">
                <LightModeIcon />
              </Tooltip>
            )}
          </IconButton>
          <Button color="inherit">Login</Button>
        </MenuSection>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool,
  onDarkModeChange: PropTypes.func.isRequired,
};

export default memo(Header);
