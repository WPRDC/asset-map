/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.footer`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.drawer + 1};
    background-color: ${theme.palette.background.default};
  `};
  padding: 4px 1rem 0;
  height: 2rem;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  //border: 2px solid yellow;
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      &#169; <FormattedMessage {...messages.copyright} values={{ year }} />
    </Wrapper>
  );
}

Footer.propTypes = {};

export default memo(Footer);
