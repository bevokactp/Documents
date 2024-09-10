import React from 'react';
import PropTypes from 'prop-types';

const Bead = ({ diameter, color, shape, style }) => {
  const beadStyle = {
    width: diameter,
    height: diameter,
    backgroundColor: color,
    borderRadius: shape === 'sphere' ? '50%' : '0%',
    display: 'inline-block',
    position: 'absolute', // Ensure position is absolute
    ...style, // Allow external styles to override
  };

  return <div style={beadStyle} className={`bead ${shape}`} />;
};

Bead.propTypes = {
  diameter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['sphere', 'cube']).isRequired,
  style: PropTypes.object // Allow external styles to be passed in
};

export default Bead;
