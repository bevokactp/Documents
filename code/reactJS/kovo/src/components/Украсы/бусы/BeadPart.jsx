// src/components/BeadPart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Bead from './Bead';

const BeadPart = ({ diameter, color, shape, count }) => {
  const beads = Array.from({ length: count }, (_, i) => (
    <Bead key={i} diameter={diameter} color={color} shape={shape} />
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {beads}
    </div>
  );
};

BeadPart.propTypes = {
  diameter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['sphere', 'cube']).isRequired,
  count: PropTypes.number.isRequired
};

export default BeadPart;
