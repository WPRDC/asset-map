import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled(Paper)`
  position: absolute;
  right: 16px;

  bottom: 32px;
  max-width: max-content;
  ${({ theme }) => css`
    padding: ${theme.spacing(1, 2)};
  `}
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function Legend({ colors, filters }) {
  return (
    <Wrapper>
      <List>
        {Object.entries(colors).map(([cat, color]) => {
          if (filters[cat]) {
            return (
              <li key={cat} style={{ color }}>
                {cat}
              </li>
            );
          }
          return null;
        })}
      </List>
    </Wrapper>
  );
}

Legend.propTypes = {};

export default Legend;
