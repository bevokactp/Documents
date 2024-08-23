import React from 'react';
import { TRIGONOMETRIC_FUNCTIONS, FUNCTION_GROUPS } from './trigonometricFunctions';

const FunctionFilters = ({ selectedFunctions, setSelectedFunctions }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFunctions({
      ...selectedFunctions,
      [name]: checked,
    });
  };

  const renderFunctionCheckboxes = (group) => {
    return Object.entries(TRIGONOMETRIC_FUNCTIONS)
      .filter(([key, fn]) => fn.group === group)
      .map(([key, fn]) => (
        <div key={key} className="function-checkbox">
          <input
            type="checkbox"
            id={key}
            name={key}
            checked={selectedFunctions[key] || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={key} className="function-label">
            <span
              className="color-indicator"
              style={{ backgroundColor: fn.color }}
            ></span>
            {fn.nameRealFull || fn.nameModernFull}
          </label>
        </div>
      ));
  };

  return (
    <div className="function-filters">
      <div className="function-grid">
        {Object.values(FUNCTION_GROUPS).map((group) => (
          <div key={group} className="function-group">
            <h3>{group}</h3>
            <div className="function-group-checkboxes">
              {renderFunctionCheckboxes(group)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionFilters;
