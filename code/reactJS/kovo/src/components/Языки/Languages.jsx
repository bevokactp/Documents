import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Languages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get('/data/languages/languages.json')
      .then(response => setLanguages(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Languages</h1>
      <ul>
        {languages.map(language => (
          <li key={language.id}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
