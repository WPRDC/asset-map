/**
 *
 * SectionHeader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing(theme.itemSpacing * 2)}px;
  `}
`;

function SectionHeader({ component, icon, children }) {
  return (
    <Wrapper>
      <Typography variant="h6" component={component}>
        {!!icon && icon}
        {children}
      </Typography>
    </Wrapper>
  );
}

SectionHeader.propTypes = {
  component: Typography.propTypes.component,
  icon: PropTypes.node,
  children: PropTypes.node,
};

SectionHeader.defaultProps = {
  component: 'h3',
};

export default memo(SectionHeader);
