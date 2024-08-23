import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Names() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('/data/dynasties/names.json')
      .then(response => setNames(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Names</h1>
      <ul>
        {names.map(name => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Names;
