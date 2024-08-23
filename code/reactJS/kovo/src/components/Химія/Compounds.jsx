// Compounds.jsx
import React from 'react';

const compoundsData = {
  oxides: {
    definition: "Оксиды — это соединения кислорода с другими элементами. Они могут быть как простыми оксидами (содержащими только кислород и один другой элемент), так и сложными.",
    formula: "A + O2 → AO",
    examples: [
      { name: "Вода", formula: "H2O" },
      { name: "Углекислый газ", formula: "CO2" },
    ],
  },
  hydrides: {
    definition: "Гидриды — это соединения водорода с другими элементами. Они могут быть как простыми (включающими водород и один другой элемент), так и сложными.",
    formula: "A + H2 → AH2",
    examples: [
      { name: "Метан", formula: "CH4" },
      { name: "Аммиак", formula: "NH3" },
    ],
  },
  halides: {
    definition: "Галогениды — это соединения галогенов (фтор, хлор, бром, йод) с другими элементами. Они обычно образуются реакцией галогенов с металлами или неметаллами.",
    formula: "A + X2 → AX2",
    examples: [
      { name: "Хлорид натрия", formula: "NaCl" },
      { name: "Фторид водорода", formula: "HF" },
    ],
  },
  sulfides: {
    definition: "Сульфиды — это соединения серы с другими элементами. Они могут быть как металлическими, так и неметаллическими.",
    formula: "A + S → AS",
    examples: [
      { name: "Сульфид железа", formula: "FeS" },
      { name: "Сульфид цинка", formula: "ZnS" },
    ],
  },
  nitrides: {
    definition: "Нитриды — это соединения азота с другими элементами. Они обычно образуются реакцией азота с металлами или неметаллами при высоких температурах.",
    formula: "A + N2 → AN",
    examples: [
      { name: "Нитрид алюминия", formula: "AlN" },
      { name: "Нитрид кремния", formula: "Si3N4" },
    ],
  },
  phosphides: {
    definition: "Фосфиды — это соединения фосфора с другими элементами. Они могут быть как простыми фосфидами, так и комплексными.",
    formula: "A + P → AP",
    examples: [
      { name: "Фосфид кальция", formula: "Ca3P2" },
      { name: "Фосфид алюминия", formula: "AlP" },
    ],
  },
  hydroxides: {
    definition: "Гидроксиды — это соединения, содержащие гидроксид-ион (OH-), образующиеся при реакции оксидов металлов с водой или другими реакциями.",
    formula: "A + H2O → A(OH)2",
    examples: [
      { name: "Гидроксид натрия", formula: "NaOH" },
      { name: "Гидроксид кальция", formula: "Ca(OH)2" },
    ],
  },
  salts: {
    definition: "Соли — это ионные соединения, состоящие из катионов и анионов, образующиеся при нейтрализации кислот и оснований.",
    formula: "HA + BOH → AB + H2O",
    examples: [
      { name: "Соль поваренная", formula: "NaCl" },
      { name: "Сульфат меди", formula: "CuSO4" },
    ],
  },
  ethers: {
    definition: "Эфиры — это органические соединения, содержащие атом кислорода между двумя углеводородными группами.",
    formula: "R-O-R'",
    examples: [
      { name: "Диметиловый эфир", formula: "CH3-O-CH3" },
      { name: "Диэтиловый эфир", formula: "C2H5-O-C2H5" },
    ],
  },
  amines: {
    definition: "Амины — это органические соединения, содержащие один или несколько атомов азота, заменяющих водород в аммиаке.",
    formula: "R-NH2",
    examples: [
      { name: "Метиламин", formula: "CH3NH2" },
      { name: "Этилендиамин", formula: "C2H4(NH2)2" },
    ],
  },
  lactams: {
    definition: "Лактамы — это циклические амиды, образующиеся при циклизации аминокислот.",
    formula: "C6H5-CO-NH-",
    examples: [
      { name: "β-Лактам", formula: "C4H5NO" },
      { name: "γ-Лактам", formula: "C5H7NO" },
    ],
  },
  carbonates: {
    definition: "Карбонаты — это соли угольной кислоты, содержащие ион карбоната (CO3^2-).",
    formula: "A2CO3",
    examples: [
      { name: "Карбонат кальция", formula: "CaCO3" },
      { name: "Карбонат натрия", formula: "Na2CO3" },
    ],
  },
};

const Compounds = () => {
  return (
    <div>
      <h2>Соединения</h2>
      <ul>
        {Object.entries(compoundsData).map(([key, { definition, formula, examples }]) => (
          <li key={key}>
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <p><strong>Определение:</strong> {definition}</p>
            <p><strong>Формула образования:</strong> {formula}</p>
            <p><strong>Примеры веществ:</strong></p>
            <ul>
              {examples.map((example, index) => (
                <li key={index}>{example.name}: {example.formula}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compounds;
