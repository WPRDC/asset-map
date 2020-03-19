/**
 *
 * Button
 *
 */

import { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

const Button = styled(MuiButton)``;

Button.propTypes = { ...MuiButton.propTypes };

export default memo(Button);
