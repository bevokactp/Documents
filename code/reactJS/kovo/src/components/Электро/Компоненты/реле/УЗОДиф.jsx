import React from 'react';

const protectionData = [
  {
    name: 'Schneider Electric: Acti 9 IID',
    description: 'Автоматический выключатель с функцией защиты от перегрузок и коротких замыканий.',
    advantages: ['Высокая надежность', 'Компактные размеры'],
    disadvantages: ['Сложность настройки', 'Дороговизна'],
    application: ['Электрические панели', 'Системы распределения электроэнергии'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Корпус', 'Механизм защиты', 'Клеммы'],
    protectionType: 'Магнитная',
    protectionView: 'Защита от перегрузок, защита от коротких замыканий',
    trippingType: 'Мгновенное срабатывание',
    leakageCurrentType: 'Фиксированный ток утечки',
    numberOfPoles: 2,
    nominalVoltage: '230V',
    nominalCurrent: '10A',
    trippingCurrent: '30mA',
    trippingTime: 'Мгновенное',
    protectionClassification: 'IP20',
    numberOfPoles: 2,
    resetMechanism: 'Механический',
    operatingTemperature: '-5°C до 40°C',
    protectionLevel: 'IP20',
    shortCircuitResistance: 'Высокая',
    indicatorAndTestButtons: 'Есть',
  },
  {
    name: 'Legrand: DX³ 40A 30mA',
    description: 'Автоматический выключатель с защитой от утечек и перегрузок.',
    advantages: ['Надежная защита', 'Простота установки'],
    disadvantages: ['Ограниченные функции настройки', 'Немного громоздкий'],
    application: ['Домашние электроустановки', 'Коммерческие здания'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 12,
    components: ['Корпус', 'Контактные группы', 'Реле'],
    protectionType: 'Электронная',
    protectionView: 'Защита от токов утечки, защита от перегрузок',
    trippingType: 'Комбинированное срабатывание',
    leakageCurrentType: 'Регулируемый ток утечки',
    numberOfPoles: 1,
    nominalVoltage: '230V',
    nominalCurrent: '40A',
    trippingCurrent: '30mA',
    trippingTime: 'Временное',
    protectionClassification: 'IP40',
    numberOfPoles: 1,
    resetMechanism: 'Автоматический',
    operatingTemperature: '-10°C до 45°C',
    protectionLevel: 'IP40',
    shortCircuitResistance: 'Средняя',
    indicatorAndTestButtons: 'Нет',
  },
  {
    name: 'ABB: DS201 H1',
    description: 'Выключатель автоматический с высокой степенью защиты и надежностью.',
    advantages: ['Высокая точность', 'Стабильная работа'],
    disadvantages: ['Высокая цена', 'Требуется специальное обслуживание'],
    application: ['Энергетические системы', 'Промышленные установки'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['Корпус', 'Контактные элементы', 'Клеммы'],
    protectionType: 'Программируемая',
    protectionView: 'Защита от коротких замыканий, защита от перегрузок',
    trippingType: 'Мгновенное срабатывание',
    leakageCurrentType: 'Фиксированный ток утечки',
    numberOfPoles: 4,
    nominalVoltage: '400V',
    nominalCurrent: '20A',
    trippingCurrent: '30mA',
    trippingTime: 'Мгновенное',
    protectionClassification: 'IP65',
    numberOfPoles: 4,
    resetMechanism: 'Автоматический',
    operatingTemperature: '-10°C до 60°C',
    protectionLevel: 'IP65',
    shortCircuitResistance: 'Высокая',
    indicatorAndTestButtons: 'Есть',
  },
  {
    name: 'Schneider Electric: Acti 9 IC60H',
    description: 'Компактный автоматический выключатель с высокой степенью защиты.',
    advantages: ['Компактные размеры', 'Удобное управление'],
    disadvantages: ['Ограниченная регулировка', 'Цена выше среднего'],
    application: ['Электрические установки', 'Энергетические системы'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Корпус', 'Механизм защиты', 'Клеммы'],
    protectionType: 'Магнитная',
    protectionView: 'Защита от перегрузок, защита от коротких замыканий',
    trippingType: 'Комбинированное срабатывание',
    leakageCurrentType: 'Регулируемый ток утечки',
    numberOfPoles: 3,
    nominalVoltage: '230V',
    nominalCurrent: '16A',
    trippingCurrent: '30mA',
    trippingTime: 'Временное',
    protectionClassification: 'IP20',
    numberOfPoles: 3,
    resetMechanism: 'Механический',
    operatingTemperature: '-5°C до 50°C',
    protectionLevel: 'IP20',
    shortCircuitResistance: 'Средняя',
    indicatorAndTestButtons: 'Нет',
  },
  {
    name: 'Legrand: DX³ 32A 30mA',
    description: 'Выключатель с защитой от утечек и перегрузок.',
    advantages: ['Высокая надежность', 'Удобная установка'],
    disadvantages: ['Ограниченная настройка', 'Может быть громоздким'],
    application: ['Системы освещения', 'Домашние электроустановки'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Корпус', 'Контактные группы', 'Реле'],
    protectionType: 'Электронная',
    protectionView: 'Защита от токов утечки, защита от перегрузок',
    trippingType: 'Комбинированное срабатывание',
    leakageCurrentType: 'Регулируемый ток утечки',
    numberOfPoles: 2,
    nominalVoltage: '230V',
    nominalCurrent: '32A',
    trippingCurrent: '30mA',
    trippingTime: 'Временное',
    protectionClassification: 'IP40',
    numberOfPoles: 2,
    resetMechanism: 'Автоматический',
    operatingTemperature: '-10°C до 45°C',
    protectionLevel: 'IP40',
    shortCircuitResistance: 'Средняя',
    indicatorAndTestButtons: 'Есть',
  },
  {
    name: 'ABB: DS201 C16/0.03',
    description: 'Автоматический выключатель с защитой от коротких замыканий и перегрузок.',
    advantages: ['Высокая точность', 'Долговечность'],
    disadvantages: ['Сложность установки', 'Высокая цена'],
    application: ['Промышленные установки', 'Энергетические системы'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 12,
    components: ['Корпус', 'Контактные элементы', 'Клеммы'],
    protectionType: 'Магнитная',
    protectionView: 'Защита от коротких замыканий, защита от перегрузок',
    trippingType: 'Мгновенное срабатывание',
    leakageCurrentType: 'Фиксированный ток утечки',
    numberOfPoles: 2,
    nominalVoltage: '230V',
    nominalCurrent: '16A',
    trippingCurrent: '30mA',
    trippingTime: 'Мгновенное',
    protectionClassification: 'IP20',
    numberOfPoles: 2,
    resetMechanism: 'Механический',
    operatingTemperature: '-5°C до 50°C',
    protectionLevel: 'IP20',
    shortCircuitResistance: 'Высокая',
    indicatorAndTestButtons: 'Есть',
  },
];

const ProtectionList = () => {
  const [sortConfig, setSortConfig] = React.useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...protectionData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [protectionData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Устройства защиты</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityAndReliability')}>Качество и надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('protectionType')}>Тип защиты</th>
            <th onClick={() => requestSort('protectionView')}>Вид защиты</th>
            <th onClick={() => requestSort('trippingType')}>Тип срабатывания</th>
            <th onClick={() => requestSort('leakageCurrentType')}>Тип токов</th>
            <th onClick={() => requestSort('numberOfPoles')}>Число полюсов</th>
            <th onClick={() => requestSort('nominalVoltage')}>Номинальное напряжение</th>
            <th onClick={() => requestSort('nominalCurrent')}>Номинальный ток</th>
            <th onClick={() => requestSort('trippingCurrent')}>Ток срабатывания</th>
            <th onClick={() => requestSort('trippingTime')}>Время срабатывания</th>
            <th onClick={() => requestSort('protectionClassification')}>Классификация по типу защиты</th>
            <th onClick={() => requestSort('resetMechanism')}>Механизм сброса</th>
            <th onClick={() => requestSort('operatingTemperature')}>Рабочая температура</th>
            <th onClick={() => requestSort('protectionLevel')}>Уровень защиты</th>
            <th onClick={() => requestSort('shortCircuitResistance')}>Устойчивость к коротким замыканям</th>
            <th onClick={() => requestSort('indicatorAndTestButtons')}>Индикаторы и тестовые кнопки</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((protection, index) => (
            <tr key={index}>
              <td>{protection.name}</td>
              <td>{protection.description}</td>
              <td>{protection.advantages.join(', ')}</td>
              <td>{protection.disadvantages.join(', ')}</td>
              <td>{protection.application.join(', ')}</td>
              <td>{protection.availability}</td>
              <td>{protection.qualityAndReliability}</td>
              <td>{protection.manufacturingComplexity}</td>
              <td>{protection.lifespan}</td>
              <td>{protection.components.join(', ')}</td>
              <td>{protection.protectionType}</td>
              <td>{protection.protectionView}</td>
              <td>{protection.trippingType}</td>
              <td>{protection.leakageCurrentType}</td>
              <td>{protection.numberOfPoles}</td>
              <td>{protection.nominalVoltage}</td>
              <td>{protection.nominalCurrent}</td>
              <td>{protection.trippingCurrent}</td>
              <td>{protection.trippingTime}</td>
              <td>{protection.protectionClassification}</td>
              <td>{protection.resetMechanism}</td>
              <td>{protection.operatingTemperature}</td>
              <td>{protection.protectionLevel}</td>
              <td>{protection.shortCircuitResistance}</td>
              <td>{protection.indicatorAndTestButtons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectionList;
