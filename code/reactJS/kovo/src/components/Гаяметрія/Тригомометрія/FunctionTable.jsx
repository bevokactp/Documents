import React from 'react';
import { TRIGONOMETRIC_FUNCTIONS } from './trigonometricFunctions';

const FunctionTable = ({ degree, selectedFunctions }) => {
  const radian = (degree * Math.PI) / 180;

  const renderTableRows = () => {
    return Object.entries(TRIGONOMETRIC_FUNCTIONS)
      .filter(([key]) => selectedFunctions[key])
      .map(([key, fn]) => (
        <tr key={key}>
          <td>{fn.nameModernFull}</td>
          <td>{fn.func(radian).toFixed(4)}</td>
          <td>{fn.description}</td>
        </tr>
      ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Функция</th>
          <th>Радианы</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default FunctionTable;
