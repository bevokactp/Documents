
import React from "react";

// import Mu11Da108May from './components/Электро/Электрикъ/1';
import Mu11Da108May from './components/Светъ/1';


export default function App() {
  return (
    <div>
      <Mu11Da108May />
    </div>
  );
}

import React from 'react';

const batteryData = [
  {
    name: 'Воздушно-цинковые (Zinc-Air)',
    description: 'Батарейки, использующие кислород из воздуха в качестве катализатора.',
    advantages: 'Высокая плотность энергии, долгий срок хранения, недорогие.',
    disadvantages: 'Ограниченная ёмкость при высокой разрядной мощности, чувствительность к влажности.',
    purpose: 'Слуховые аппараты, медицинские устройства.',
    quality: 'Среднее',
    reliability: 'Средняя',
    application: 'Слуховые аппараты, устройства медицинского назначения.',
    availability: 'Широко доступные',
  },

];

const BatteryList = () => {
  return (
    <div>
      <h1>Типы батареек</h1>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Преимущества</th>
            <th>Недостатки</th>
            <th>Назначение</th>
            <th>Качество</th>
            <th>Надежность</th>
            <th>Применение</th>
            <th>Доступность</th>
          </tr>
        </thead>
        <tbody>
          {batteryData.map((battery, index) => (
            <tr key={index}>
              <td>{battery.name}</td>
              <td>{battery.description}</td>
              <td>{battery.advantages}</td>
              <td>{battery.disadvantages}</td>
              <td>{battery.purpose}</td>
              <td>{battery.quality}</td>
              <td>{battery.reliability}</td>
              <td>{battery.application}</td>
              <td>{battery.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
*******************

названия столбцов по русски
добавить сортировку по столбам без css

сделать по примеру выше но для


название ''
описание ''
преимущества []
недостатки []
применение []
доступность integer 1 -- самая низкая 5 -- высокая
качество и надежность integer 1 -- самая низкая 5 -- высокая
сложность изготовления -- числом от 1 (очень легко) и чем сложнее тем число больше
срок службы лет integer
компоненты изготовления []
