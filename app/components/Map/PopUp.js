import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// import styled, {css} from 'styled-components';

function PopUp({ name, type, lat, lng, onClose }) {
  return (
    <Popup
      latitude={lat}
      longitude={lng}
      closeOnClick={false}
      onClose={onClose}
      closeButton={false}
      tipSize={0}
      anchor="bottom"
      interactiveLayers={['asset-points']}
      style={{ padding: 0 }}
    >
      <Paper style={{ textAlign: 'center', padding: '4px' }}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption">{type}</Typography>
      </Paper>
    </Popup>
  );
}

PopUp.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  onClose: PropTypes.func,
};

export default PopUp;
