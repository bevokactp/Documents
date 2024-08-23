import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Representatives = () => {
  const [representatives, setRepresentatives] = useState([]);
  const [names, setNames] = useState([]);
  const [dynasties, setDynasties] = useState([]);
  const [religions, setReligions] = useState([]);

  useEffect(() => {
    axios.get('/data/dynasties/representatives.json')
      .then(response => setRepresentatives(response.data))
      .catch(error => console.error('Error fetching representatives data:', error));
  }, []);

  useEffect(() => {
    axios.get('/data/dynasties/names.json')
      .then(response => setNames(response.data))
      .catch(error => console.error('Error fetching names data:', error));
  }, []);

  useEffect(() => {
    axios.get('/data/dynasties/dynasties.json')
      .then(response => setDynasties(response.data))
      .catch(error => console.error('Error fetching dynasties data:', error));
  }, []);

  useEffect(() => {
    axios.get('/data/religions/religions.json')
      .then(response => setReligions(response.data))
      .catch(error => console.error('Error fetching religions data:', error));
  }, []);

  const getNameById = (id) => {
    const name = names.find(name => name.id === id);
    return name ? name.name : 'Unknown Name';
  };

  const getDynastyById = (id) => {
    const dynasty = dynasties.find(dynasty => dynasty.id === id);
    return dynasty ? dynasty.name : 'Unknown Dynasty';
  };

  const getReligionById = (id) => {
    const religion = religions.find(religion => religion.id === id);
    return religion ? religion.name : 'Unknown Religion';
  };

  return (
    <div>
      <h1>Representatives</h1>
      <ul>
        {representatives.map(rep => (
          <li key={rep.id}>
            <h2>{getNameById(rep.name_id)}</h2>
            <p>Gender: {rep.gender}</p>
            <p>Dynasty: {getDynastyById(rep.dynasty_id)}</p>
            <p>Religion: {getReligionById(rep.religion_id)}</p>
            <p>Father: {getNameById(rep.father_id)}</p>
            <p>Mother: {getNameById(rep.mother_id)}</p>
            <p>Spouses: {rep.spouses_id.map(id => getNameById(id)).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Representatives;
