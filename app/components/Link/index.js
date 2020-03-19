/**
 *
 * Link
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MuiLink from '@material-ui/core/Link';

const Link = styled(MuiLink)`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.light};
  `}
`;

Link.propTypes = { ...MuiLink.propTypes };

export default memo(Link);
