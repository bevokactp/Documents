import React from 'react';

const tools = [
  {
    name: 'Паяльник',
    characteristics: 'Небольшое устройство с металлическим наконечником, нагреваемым до высокой температуры.',
    goodFor: 'Пайка мелких компонентов, работа с печатными платами.',
    badFor: 'Массированные соединения, работа с большими деталями.',
    advantages: 'Компактный, прост в использовании, хорош для мелкой работы.',
    disadvantages: 'Ограниченный контроль температуры, может перегреваться при длительной работе.',
    types: 'Ручные паяльники, паяльники с регулируемой температурой.',
    storage: 'Хранить в подставке, вдали от источников влаги и прямого солнечного света.',
  },
  {
    name: 'Паяльная станция',
    characteristics: 'Устройство, состоящее из блока управления и паяльника с возможностью регулировки температуры.',
    goodFor: 'Точная настройка температуры, работа с различными типами припоя и соединений.',
    badFor: 'Большие работы, которые требуют использования другого оборудования.',
    advantages: 'Подача стабильной температуры, возможность использования различных насадок и функций.',
    disadvantages: 'Большой размер, более высокая цена по сравнению с обычным паяльником.',
    types: 'Станции с цифровым и аналоговым управлением, с функцией термостатического контроля.',
    storage: 'Хранить в сухом месте, держать в чистоте, избегать механических повреждений.',
  },
  {
    name: 'Термофен',
    characteristics: 'Устройство, использующее горячий воздух для нагрева и размягчения материалов.',
    goodFor: 'Удаление компонентов, размягчение клея, снятие старых покрытий.',
    badFor: 'Точная пайка мелких деталей, работа с компонентами, чувствительными к высокому температурному воздействию.',
    advantages: 'Универсальность, возможность регулировки температуры и потока воздуха.',
    disadvantages: 'Может быть сложен в использовании для новичков, требует осторожности при работе.',
    types: 'Термофены с различными насадками и уровнями мощности.',
    storage: 'Хранить в месте, защищенном от попадания влаги и пыли, избегать перегрева.',
  }
];

const Оборудованіе = () => {
  return (
    <div>
      <h3>Оборудование</h3>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Характеристики</th>
            <th>Для каких задач отлично</th>
            <th>Для каких задач плохо</th>
            <th>Преимущества</th>
            <th>Недостатки</th>
            <th>Виды и типы</th>
            <th>Условия хранения</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr key={index}>
              <td>{tool.name}</td>
              <td>{tool.characteristics}</td>
              <td>{tool.goodFor}</td>
              <td>{tool.badFor}</td>
              <td>{tool.advantages}</td>
              <td>{tool.disadvantages}</td>
              <td>{tool.types}</td>
              <td>{tool.storage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        tbody tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tbody tr:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default Оборудованіе;
