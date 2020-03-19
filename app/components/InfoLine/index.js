/**
 *
 * InfoLine
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div``;

function InfoLine({ term, value, icon, missingDataMsg }) {
  return (
    <Wrapper>
      {!!term && (
        <Typography display="inline" variant="body1">
          <b>{term}: </b>
        </Typography>
      )}
      {![null, undefined, ''].includes(value) ? (
        <Typography display="inline" variant="body1">
          {value}
        </Typography>
      ) : (
        <Typography color="textSecondary" display="inline" variant="body1">
          <i>{missingDataMsg}</i>
        </Typography>
      )}
    </Wrapper>
  );
}

InfoLine.propTypes = {
  term: PropTypes.node,
  value: PropTypes.node,
  icon: PropTypes.node,
  missingDataMsg: PropTypes.node,
};

InfoLine.defaultProps = {
  missingDataMsg: 'Not Provided',
};

export default memo(InfoLine);
