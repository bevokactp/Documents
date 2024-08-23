import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Fraction } from './fraction';

const FractionsTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/fractions.tsv')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        Papa.parse(text, {
          header: false,
          delimiter: '\t',
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.map(row => {
              const numerator = parseInt(row[0], 10);
              const denominator = parseInt(row[1], 10);
              const description = row[2];

              const fraction = new Fraction(numerator, denominator, description);

              return {
                fraction10: fraction.asFraction10(),
                fraction10Base: fraction.asFraction10WithBase(),
                fraction12Base: fraction.asFraction12WithBase(),
                decimal10: fraction.toBase10Decimal(5),
                decimal12: fraction.toBase12Decimal(),
                description: fraction.description,
              };
            });

            setData(parsedData);
          },
          error: (parseError) => {
            console.error('Error parsing TSV:', parseError);
            setError('Error parsing TSV file');
          },
        });
      })
      .catch((fetchError) => {
        console.error('Error fetching TSV file:', fetchError);
        setError('Error fetching TSV file');
      });
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <table border="1">
        <thead>
        <tr>
            <th rowSpan="2">Дробь 10</th>
            <th colSpan="4">Полная Дробь</th>
            <th colSpan="4">Частное</th>
            <th rowSpan="2">Описание</th>
          </tr>
          <tr>
            <th>10</th>
            <th>12</th>
            <th>40</th>
            <th>60</th>
            <th>10</th>
            <th>12</th>
            <th>40</th>
            <th>60</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.fraction10}</td>
              <td>{row.fraction10Base}</td>
              <td>{row.fraction12Base}</td>
              <td>----</td>
              <td>----</td>
              <td>{row.decimal10}</td>
              <td>{row.decimal12}</td>
              <td>----</td>
              <td>----</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FractionsTable;
