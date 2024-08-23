// src/components/Astronomy/ConstellationsList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const ConstellationsList = () => {
  const [constellations, setConstellations] = useState([]);

  useEffect(() => {
    axios.get('/data/astronomy/constellations.json')
      .then(response => setConstellations(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Созвездия</h1>
      <ul>
        {constellations.map(constellation => (
          <li key={constellation.key}>
            <Link to={`${ROUTES.AstronomyConstellation.replace(':key', constellation.key)}`}>
              <h2>{constellation.names.join(', ')}</h2>
            </Link>
            <p>{constellation.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConstellationsList;
