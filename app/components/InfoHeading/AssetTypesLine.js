import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import MuiChip from '@material-ui/core/Chip';
import { assetTypeSchema } from '../../schemas';

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(theme.itemSpacing)}px;
  `}
`;

const Chip = styled(MuiChip)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(theme.itemSpacing)}px;
  `}
`;

Chip.propTypes = MuiChip.propTypes;

function AssetTypesList({ assetTypes }) {
  return (
    <Wrapper>
      {assetTypes.map(({ name, title }) => (
        <Chip variant="outlined" size="small" key={name} label={title} />
      ))}
    </Wrapper>
  );
}

AssetTypesList.propTypes = {
  assetTypes: PropTypes.arrayOf(PropTypes.shape(assetTypeSchema)),
};

export default AssetTypesList;
