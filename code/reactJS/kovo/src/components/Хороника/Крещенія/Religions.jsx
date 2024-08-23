import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Religions = () => {
  const [religions, setReligions] = useState([]);
  const [books, setBooks] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [representatives, setRepresentatives] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('/data/religions/religions.json')
      .then(response => setReligions(response.data))
      .catch(error => console.error('Error fetching religions data:', error));
  }, []);

  useEffect(() => {
    axios.get('/data/religions/books.json')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books data:', error));
  }, []);

  useEffect(() => {
    axios.get('/data/languages/languages.json')
      .then(response => setLanguages(response.data))
      .catch(error => console.error('Error fetching languages data:', error));
  }, []);

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

  const getBookByKey = (key) => {
    const book = books.find(book => book.id === key);
    return book ? book.name : 'Unknown Book';
  };

  const getLanguageByKey = (key) => {
    const language = languages.find(language => language.id === key);
    return language ? language.name : 'Unknown Language';
  };

  const getRepresentativeByKey = (key) => {
    const rep = representatives.find(rep => rep.id === key);
    return rep ? getNameByKey(rep.name_id) : 'Unknown Representative';
  };

  const getNameByKey = (key) => {
    const name = names.find(name => name.id === key);
    return name ? name.name : 'Unknown Name';
  };

  console.log(books)

  return (
    <div>
      <h1>Religions</h1>
      <ul>
        {religions.map(religion => (
          <li key={religion.id}>
            <h2>{religion.name}</h2>
            <p>Sacred Books: {religion.books_id.map(key => getBookByKey(key)).join(', ')}</p>
            <p>Founder: {getRepresentativeByKey(religion.founder_id)}</p>
            <p>Savior: {getRepresentativeByKey(religion.savior_id)}</p>
            <p>Followers: {religion.followers.join(', ')}</p>
            <p>Appearance Time: {religion.appearance_time}</p>
            <p>Worship Language: {getLanguageByKey(religion.language_id)}</p>
            <p>Description: {religion.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Religions;
