// src/components/Astronomy/ConstellationDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const ConstellationDetails = () => {
  const { key } = useParams();
  const [constellation, setConstellation] = useState(null);

  useEffect(() => {
    axios.get(`/data/astronomy/constellations/${key}.json`)
      .then(response => setConstellation(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [key]);

  if (!constellation) return <p>Loading... создай файл под каждый</p>;

  return (
    <div>
      <h1>{constellation.names.join(', ')}</h1>
      <p>{constellation.description}</p>
      <h3>Звезды:</h3>
      <ul>
        {constellation.main_stars.map(star => (
          <li key={star}>
            <Link to={`${ROUTES.AstronomyStar.replace(':key', star)}`}>{star}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConstellationDetails;
