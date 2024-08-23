import React from 'react';
import { processes } from "./constants";

function ПорядокРабот() {
  return (
    <div>
      <h2>Порядок выполнения сварочных работ</h2>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            {Object.keys(processes).map((key) => (
              <th key={key}>{processes[key].title}</th>
            ))}
          </tr>
          <tr>
            <th>Описание</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-desc'}>{processes[key].description}</td>
            ))}
          </tr>
          <tr>
            <th>Плюсы</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-adv'}>
                <ul>
                  {processes[key].advantages.map((adv, idx) => (
                    <li key={idx}>{adv}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Минусы</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-dis'}>
                <ul>
                  {processes[key].disadvantages.map((dis, idx) => (
                    <li key={idx}>{dis}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Подготовка оборудования</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-prep-eq'}>
                <ul>
                  {processes[key].order.prepareEquipment.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Подготовка материала</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-prep-mat'}>
                <ul>
                  {processes[key].order.prepareMaterials.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Процесс работы</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-steps-wk'}>
                <ul>
                  {processes[key].order.stepsWorks.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Завершение работы</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-steps-fn'}>
                <ul>
                  {processes[key].order.stepsFinishing.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th>Проверка результата</th>
            {Object.keys(processes).map((key) => (
              <td key={key + '-check'}>
                <ul>
                  {processes[key].order.checkResult.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ПорядокРабот;
