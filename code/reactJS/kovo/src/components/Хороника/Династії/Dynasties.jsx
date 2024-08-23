import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dynasties() {
  const [dynasties, setDynasties] = useState([]);

  useEffect(() => {
    axios.get('/data/dynasties/dynasties.json')
      .then(response => setDynasties(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Dynasties</h1>
      <ul>
        {dynasties.map(dynasty => (
          <li key={dynasty.id}>
            <strong>{dynasty.name}</strong>: {dynasty.species.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dynasties;
