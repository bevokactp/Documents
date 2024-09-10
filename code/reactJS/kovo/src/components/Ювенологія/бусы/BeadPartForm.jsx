// src/components/BeadPartForm.jsx
import React from 'react';

const BeadPartForm = ({ index, part, updatePart }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const processedValue = name === 'count' || name === 'diameter' ? parseInt(value, 10) : value;
    updatePart(index, { ...part, [name]: processedValue });
  };

  return (
    <div className="bead-part-form">
      <label> Количество бусин: <input type="number" name="count" value={part.count} onChange={handleChange} min="0" /> </label>
      <label> Диаметр: <input type="number" name="diameter" value={part.diameter} min="1" onChange={handleChange} /> </label>
      <label> Цвет: <input type="color" name="color" value={part.color} onChange={handleChange} /> </label>
      <label> Форма: <select name="shape" value={part.shape} onChange={handleChange}>
		<option value="sphere">Шар</option>
		<option value="cube">Куб</option> </select>
	  </label>
    </div>
  );
};

export default BeadPartForm;
