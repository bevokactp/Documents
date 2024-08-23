// Step.jsx
import React, { useState } from 'react';
import steps from './steps.yaml'; // Импорт YAML файла как JavaScript объект

const Step = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (stepKey) => {
    setOpenStep(openStep === stepKey ? null : stepKey);
  };

  return (
    <div>
      {Object.entries(steps).map(([key, step]) => (
        <div key={key}>
          <h3 onClick={() => toggleStep(key)} style={{ cursor: 'pointer' }}>
            {step.Name}
          </h3>
          {openStep === key && (
            <ul>
              {Object.entries(step.Substeps).map(([subkey, substep]) => (
                <li key={subkey}>
                  <strong>{substep[0].Name}</strong>
                  <ul>
                    {substep[0].Questions.map((question, qIndex) => (
                      <li key={qIndex}>{question}</li>
                    ))}
                  </ul>
                  <p><em>{substep[0].Goal}</em></p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Step;
