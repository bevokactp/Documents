// src/components/Astronomy/Objects.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Objects = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    axios.get('/data/astronomy/objects.json')
      .then(response => setObjects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Cosmic Objects</h1>
      <ul>
        {objects.map(object => (
          <li key={object.key}>
            <h2>{object.name.join(', ')}</h2>
            <p>Type: {object.type}</p>
            <p>Description: {object.description}</p>
            <p>Color: {object.color}</p>
            <p>Diameter: {object.diametr}</p>
            <p>Tilt: {object.tilt}</p>
            {object.orbits && <p>Orbits: {object.orbits}</p>}
            {object.moons && (
              <div>
                <h3>Moons:</h3>
                <ul>
                  {object.moons.map(moon => (
                    <li key={moon.name.join(', ')}>
                      <p>Name: {moon.name.join(', ')}</p>
                      <p>Distance (km): {moon.distance_km}</p>
                      <p>Diameter: {moon.diametr}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Objects;
