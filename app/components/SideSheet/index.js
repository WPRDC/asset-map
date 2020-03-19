/**
 *
 * SideSheet
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import MuiDrawer from '@material-ui/core/Drawer';

const Drawer = styled(MuiDrawer)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    width: ${theme.spacing(theme.drawerWidth)}px;
    & .MuiDrawer-paper {
      position: relative;
      width: ${theme.spacing(theme.drawerWidth)}px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  `}
`;

const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
  `}
`;
function SideSheet({ open, children, anchor }) {
  return (
    <Drawer open anchor={anchor} variant="permanent">
      <Content>{children}</Content>
    </Drawer>
  );
}

SideSheet.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  anchor: PropTypes.oneOf(['right', 'left', 'bottom']),
};

SideSheet.defaultProps = {
  anchor: 'right',
};

export default SideSheet;
