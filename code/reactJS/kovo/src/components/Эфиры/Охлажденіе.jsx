import React, { useState } from 'react';

// Данные о различных эффектах
const effectData = [
  {
    name: 'Эффект Зеебека',
    description: 'Эффект термоэлектрического генератора, где разность температур создает электрический ток.',
    advantages: ['Высокая эффективность преобразования энергии', 'Простота в использовании'],
    disadvantages: ['Ограниченный температурный диапазон', 'Низкая мощность охлаждения'],
    application: ['Энергетика', 'Медицинские устройства'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Термоэлектрический материал', 'Контакты'],
    thermoelectricCoefficient: '200 μV/K',
    thermalConductivity: '1.0 W/(m·K)',
    electricalResistance: '0.01 Ω',
    energyConversionEfficiency: '5%',
    temperatureRange: '0-300°C',
    coolingPower: '10 W',
    temperatureResponseSpeed: 'Средняя',
    stability: 'Высокая',
    durability: 'Высокая',
    currentConsumption: 'Низкое',
    size: 'Средний',
    weight: 'Легкий',
    noise: 'Низкий',
    speed: 'Средняя',
    maintenance: 'Минимальное',
  },
  {
    name: 'Эффект Пельтье',
    description: 'Эффект термоэлектрического охлаждения, при котором при подаче тока на два различных проводника возникает разность температур.',
    advantages: ['Компактность', 'Эффективное охлаждение'],
    disadvantages: ['Ограниченный температурный диапазон', 'Нужен радиатор'],
    application: ['Электронное охлаждение', 'Автомобильные системы'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 8,
    components: ['Термоэлектрические элементы', 'Радиатор'],
    thermoelectricCoefficient: '150 μV/K',
    thermalConductivity: '0.8 W/(m·K)',
    electricalResistance: '0.02 Ω',
    energyConversionEfficiency: '4%',
    temperatureRange: '-20-100°C',
    coolingPower: '20 W',
    temperatureResponseSpeed: 'Быстрая',
    stability: 'Средняя',
    durability: 'Средняя',
    currentConsumption: 'Среднее',
    size: 'Компактный',
    weight: 'Легкий',
    noise: 'Низкий',
    speed: 'Быстрая',
    maintenance: 'Низкое',
  },
  {
    name: 'Эффект Томсона',
    description: 'Эффект, связанный с изменением температуры при протекании тока через проводник, находящийся в магнитном поле.',
    advantages: ['Может быть использован в термоэлектрических генераторах'],
    disadvantages: ['Сложность в управлении', 'Требует сложных условий эксплуатации'],
    application: ['Научные исследования', 'Энергетика'],
    availability: 2,
    qualityAndReliability: 3,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['Проводники', 'Магнитное поле'],
    thermoelectricCoefficient: '250 μV/K',
    thermalConductivity: '0.9 W/(m·K)',
    electricalResistance: '0.015 Ω',
    energyConversionEfficiency: '3%',
    temperatureRange: '-10-250°C',
    coolingPower: 'Не применяется',
    temperatureResponseSpeed: 'Медленная',
    stability: 'Высокая',
    durability: 'Высокая',
    currentConsumption: 'Среднее',
    size: 'Разнообразные',
    weight: 'Разнообразные',
    noise: 'Низкий',
    speed: 'Медленная',
    maintenance: 'Среднее',
  },
  {
    name: 'Конвекция',
    description: 'Процесс переноса тепла жидкостью или газом за счет их движения.',
    advantages: ['Эффективное распределение тепла', 'Широкий диапазон применения'],
    disadvantages: ['Зависимость от среды', 'Может потребовать дополнительных компонентов'],
    application: ['Климатические системы', 'Электронное охлаждение'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 2,
    lifespan: 'Не применимо',
    components: ['Кулер', 'Вентиляторы'],
    thermoelectricCoefficient: 'Не применимо',
    thermalConductivity: 'Зависит от среды',
    electricalResistance: 'Не применимо',
    energyConversionEfficiency: 'Не применимо',
    temperatureRange: 'Широкий',
    coolingPower: 'Зависит от системы',
    temperatureResponseSpeed: 'Высокая',
    stability: 'Высокая',
    durability: 'Высокая',
    currentConsumption: 'Зависит от системы',
    size: 'Разнообразные',
    weight: 'Разнообразные',
    noise: 'Средний',
    speed: 'Высокая',
    maintenance: 'Низкое',
  },
  {
    name: 'Вентиляция',
    description: 'Процесс обеспечения свежего воздуха путем его замены или перемещения в помещении.',
    advantages: ['Улучшение качества воздуха', 'Снижение температуры'],
    disadvantages: ['Может потребовать энергозатрат', 'Зависимость от внешних условий'],
    application: ['Жилые и коммерческие здания', 'Промышленные помещения'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 2,
    lifespan: 'Не применимо',
    components: ['Вентиляторы', 'Воздуховоды'],
    thermoelectricCoefficient: 'Не применимо',
    thermalConductivity: 'Не применимо',
    electricalResistance: 'Не применимо',
    energyConversionEfficiency: 'Не применимо',
    temperatureRange: 'Зависит от внешних условий',
    coolingPower: 'Зависит от системы',
    temperatureResponseSpeed: 'Высокая',
    stability: 'Высокая',
    durability: 'Высокая',
    currentConsumption: 'Зависит от системы',
    size: 'Разнообразные',
    weight: 'Разнообразные',
    noise: 'Средний',
    speed: 'Высокая',
    maintenance: 'Среднее',
  },
  {
    name: 'Теплообмен',
    description: 'Процесс переноса тепла между двумя или несколькими средами.',
    advantages: ['Эффективное управление тепловыми потоками', 'Широкий диапазон применения'],
    disadvantages: ['Может требовать сложных конструкций', 'Необходима регулярная проверка'],
    application: ['Климатические системы', 'Промышленные процессы'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 3,
    lifespan: 'Зависит от системы',
    components: ['Теплообменники', 'Трубопроводы'],
    thermoelectricCoefficient: 'Не применимо',
    thermalConductivity: 'Зависит от материалов',
    electricalResistance: 'Не применимо',
    energyConversionEfficiency: 'Зависит от системы',
    temperatureRange: 'Широкий',
    coolingPower: 'Зависит от системы',
    temperatureResponseSpeed: 'Средняя',
    stability: 'Высокая',
    durability: 'Высокая',
    currentConsumption: 'Не применимо',
    size: 'Разнообразные',
    weight: 'Разнообразные',
    noise: 'Средний',
    speed: 'Средняя',
    maintenance: 'Среднее',
  }
];

const EffectList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...effectData];
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [effectData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Охлаждение</h1>
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
            <th onClick={() => requestSort('thermoelectricCoefficient')}>Коэффициент термоэлектрической силы</th>
            <th onClick={() => requestSort('thermalConductivity')}>Теплопроводность</th>
            <th onClick={() => requestSort('electricalResistance')}>Электрическое сопротивление</th>
            <th onClick={() => requestSort('energyConversionEfficiency')}>Эффективность преобразования энергии</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон работы</th>
            <th onClick={() => requestSort('coolingPower')}>Мощность охлаждения</th>
            <th onClick={() => requestSort('temperatureResponseSpeed')}>Скорость реакции на изменения температуры</th>
            <th onClick={() => requestSort('stability')}>Стабильность</th>
            <th onClick={() => requestSort('durability')}>Долговечность</th>
            <th onClick={() => requestSort('currentConsumption')}>Токопотребление</th>
            <th onClick={() => requestSort('size')}>Размеры</th>
            <th onClick={() => requestSort('weight')}>Вес</th>
            <th onClick={() => requestSort('noise')}>Шум</th>
            <th onClick={() => requestSort('speed')}>Скорость</th>
            <th onClick={() => requestSort('maintenance')}>Обслуживание</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((effect, index) => (
            <tr key={index}>
              <td>{effect.name}</td>
              <td>{effect.description}</td>
              <td>{effect.advantages.join(', ')}</td>
              <td>{effect.disadvantages.join(', ')}</td>
              <td>{effect.application.join(', ')}</td>
              <td>{effect.availability}</td>
              <td>{effect.qualityAndReliability}</td>
              <td>{effect.manufacturingComplexity}</td>
              <td>{effect.lifespan}</td>
              <td>{effect.components.join(', ')}</td>
              <td>{effect.thermoelectricCoefficient}</td>
              <td>{effect.thermalConductivity}</td>
              <td>{effect.electricalResistance}</td>
              <td>{effect.energyConversionEfficiency}</td>
              <td>{effect.temperatureRange}</td>
              <td>{effect.coolingPower}</td>
              <td>{effect.temperatureResponseSpeed}</td>
              <td>{effect.stability}</td>
              <td>{effect.durability}</td>
              <td>{effect.currentConsumption}</td>
              <td>{effect.size}</td>
              <td>{effect.weight}</td>
              <td>{effect.noise}</td>
              <td>{effect.speed}</td>
              <td>{effect.maintenance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EffectList;
