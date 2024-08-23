// src/components/Astronomy/StarDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StarDetails = () => {
  const { key } = useParams();
  const [star, setStar] = useState(null);

  useEffect(() => {
    // Fetch data for the specific star
    axios.get(`/data/astronomy/stars/${key}.json`)
      .then(response => setStar(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [key]);

  if (!star) return <p>Loading... создай файл под каждый</p>;

  return (
    <div>
      <h1>{star.names.join(', ')}</h1>
      <p>{star.description}</p>
      <h3>Созвездие:</h3>
      <p>{star.constellation}</p>
    </div>
  );
};

export default StarDetails;
