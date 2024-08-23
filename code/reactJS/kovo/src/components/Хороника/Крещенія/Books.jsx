import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/data/religions/books.json')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong>: {book.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
