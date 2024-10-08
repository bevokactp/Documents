import React, { useState } from 'react';


const bifilarData = [
	{
	  название: 'Бифиляр с ферритовым сердечником',
	  описание: 'Использует ферритовый сердечник для увеличения индуктивности.',
	  преимущества: ['Высокая индуктивность', 'Компактность'],
	  недостатки: ['Сложность изготовления', 'Тяжелее воздушного ядра'],
	  применение: ['Фильтры', 'Трансформаторы'],
	  доступность: 4,
	  качество: 4,
	  надежность: 5,
	  сложностьИзготовления: 3,
	  срокСлужбы: 10,
	  компонентыИзготовления: ['Медный провод', 'Ферритовое ядро'],
	  многослойные: true,
	  спиральные: false,
	  асимметричные: false,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Цилиндрическая',
	  способНамотки: 'Плотная намотка',
	  индуктивность: 'Высокая',
	  сопротивление: 'Низкое',
	  частотныйДиапазон: 'Широкий',
	  качествоРезонанса: 'Высокое',
	  габариты: 'Компактные',
	  форма: 'Цилиндрическая',
	  материалСердечника: 'Феррит',
	},
	{
	  название: 'Бифиляр с воздушным ядром',
	  описание: 'Использует воздух в качестве сердечника для низкой индуктивности.',
	  преимущества: ['Легкий вес', 'Низкая стоимость'],
	  недостатки: ['Низкая индуктивность', 'Чувствительность к внешним помехам'],
	  применение: ['Антенны', 'Радиопередатчики'],
	  доступность: 5,
	  качество: 3,
	  надежность: 3,
	  сложностьИзготовления: 2,
	  срокСлужбы: 15,
	  компонентыИзготовления: ['Медный провод'],
	  многослойные: false,
	  спиральные: true,
	  асимметричные: false,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Кольцевая',
	  способНамотки: 'Свободная намотка',
	  индуктивность: 'Низкая',
	  сопротивление: 'Высокое',
	  частотныйДиапазон: 'Ограниченный',
	  качествоРезонанса: 'Среднее',
	  габариты: 'Большие',
	  форма: 'Кольцевая',
	  материалСердечника: 'Воздух',
	},
	{
	  название: 'Спиральный бифиляр',
	  описание: 'Используется спиральная форма намотки для уменьшения взаимной индуктивности.',
	  преимущества: ['Устойчивость к внешним помехам', 'Компактный размер'],
	  недостатки: ['Сложность производства', 'Высокая стоимость'],
	  применение: ['Сигнальные линии', 'Высокочастотные приложения'],
	  доступность: 3,
	  качество: 5,
	  надежность: 4,
	  сложностьИзготовления: 4,
	  срокСлужбы: 20,
	  компонентыИзготовления: ['Медный провод', 'Изолирующая лента'],
	  многослойные: true,
	  спиральные: true,
	  асимметричные: true,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Спиральная',
	  способНамотки: 'Спиральная намотка',
	  индуктивность: 'Средняя',
	  сопротивление: 'Среднее',
	  частотныйДиапазон: 'Широкий',
	  качествоРезонанса: 'Высокое',
	  габариты: 'Компактные',
	  форма: 'Спиральная',
	  материалСердечника: 'Отсутствует',
	},
	{
	  название: 'Плоский бифиляр',
	  описание: 'Проводники располагаются в плоской конструкции для уменьшения взаимной индуктивности.',
	  преимущества: ['Удобен для монтажа', 'Легкость и гибкость'],
	  недостатки: ['Сложность в обеспечении равномерности', 'Ограниченный частотный диапазон'],
	  применение: ['Электромагнитные экраны', 'Индукционные плиты'],
	  доступность: 4,
	  качество: 3,
	  надежность: 3,
	  сложностьИзготовления: 3,
	  срокСлужбы: 12,
	  компонентыИзготовления: ['Медный провод', 'Плоский изолятор'],
	  многослойные: false,
	  спиральные: false,
	  асимметричные: false,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Плоская',
	  способНамотки: 'Плоская намотка',
	  индуктивность: 'Средняя',
	  сопротивление: 'Среднее',
	  частотныйДиапазон: 'Средний',
	  качествоРезонанса: 'Среднее',
	  габариты: 'Плоские',
	  форма: 'Плоская',
	  материалСердечника: 'Отсутствует',
	},
	{
	  название: 'Стандартный бифиляр',
	  описание: 'Стандартная форма с двумя проводниками, намотанными параллельно.',
	  преимущества: ['Простота изготовления', 'Доступность'],
	  недостатки: ['Ограниченная индуктивность', 'Подверженность взаимной индукции'],
	  применение: ['Обучение', 'Электрические цепи'],
	  доступность: 5,
	  качество: 4,
	  надежность: 4,
	  сложностьИзготовления: 2,
	  срокСлужбы: 8,
	  компонентыИзготовления: ['Медный провод', 'Изолирующий материал'],
	  многослойные: false,
	  спиральные: false,
	  асимметричные: false,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Цилиндрическая',
	  способНамотки: 'Параллельная намотка',
	  индуктивность: 'Средняя',
	  сопротивление: 'Среднее',
	  частотныйДиапазон: 'Средний',
	  качествоРезонанса: 'Среднее',
	  габариты: 'Стандартные',
	  форма: 'Цилиндрическая',
	  материалСердечника: 'Отсутствует',
	},
	{
	  название: 'Трансформаторный бифиляр',
	  описание: 'Используется в трансформаторах для улучшения передачи сигнала.',
	  преимущества: ['Высокая передача сигнала', 'Низкое искажение'],
	  недостатки: ['Сложное изготовление', 'Высокая стоимость'],
	  применение: ['Трансформаторы', 'Силовая электроника'],
	  доступность: 3,
	  качество: 5,
	  надежность: 5,
	  сложностьИзготовления: 4,
	  срокСлужбы: 20,
	  компонентыИзготовления: ['Медный провод', 'Ферритовое ядро'],
	  многослойные: true,
	  спиральные: false,
	  асимметричные: true,
	  количествоПроводников: 4,
	  геометрическаяФорма: 'Цилиндрическая',
	  способНамотки: 'Трансформаторная намотка',
	  индуктивность: 'Высокая',
	  сопротивление: 'Низкое',
	  частотныйДиапазон: 'Широкий',
	  качествоРезонанса: 'Высокое',
	  габариты: 'Стандартные',
	  форма: 'Цилиндрическая',
	  материалСердечника: 'Феррит',
	},
	{
	  название: 'Фильтровый бифиляр',
	  описание: 'Специально разработан для использования в фильтрах.',
	  преимущества: ['Высокая фильтрация', 'Устойчивость к шуму'],
	  недостатки: ['Сложность конструкции', 'Высокая стоимость'],
	  применение: ['Фильтрация высокочастотных сигналов', 'Электромагнитные экраны'],
	  доступность: 3,
	  качество: 4,
	  надежность: 5,
	  сложностьИзготовления: 4,
	  срокСлужбы: 25,
	  компонентыИзготовления: ['Медный провод', 'Феррит', 'Изолирующий материал'],
	  многослойные: true,
	  спиральные: false,
	  асимметричные: true,
	  количествоПроводников: 2,
	  геометрическаяФорма: 'Цилиндрическая',
	  способНамотки: 'Фильтровая намотка',
	  индуктивность: 'Высокая',
	  сопротивление: 'Низкое',
	  частотныйДиапазон: 'Узкий',
	  качествоРезонанса: 'Высокое',
	  габариты: 'Стандартные',
	  форма: 'Цилиндрическая',
	  материалСердечника: 'Феррит',
	},
	// Add more bifilar types as needed...
  ];


const BatteryList = () => {
  const [data, setData] = useState(bifilarData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Sort the data
  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы бифиляров</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('название')}>Название</th>
            <th onClick={() => handleSort('описание')}>Описание</th>
            <th onClick={() => handleSort('преимущества')}>Преимущества</th>
            <th onClick={() => handleSort('недостатки')}>Недостатки</th>
            <th onClick={() => handleSort('применение')}>Применение</th>
            <th onClick={() => handleSort('доступность')}>Доступность</th>
            <th onClick={() => handleSort('качество')}>Качество</th>
            <th onClick={() => handleSort('надежность')}>Надежность</th>
            <th onClick={() => handleSort('сложностьИзготовления')}>Сложность изготовления</th>
            <th onClick={() => handleSort('срокСлужбы')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('компонентыИзготовления')}>Компоненты изготовления</th>
            <th onClick={() => handleSort('многослойные')}>Многослойные</th>
            <th onClick={() => handleSort('спиральные')}>Спиральные</th>
            <th onClick={() => handleSort('асимметричные')}>Асимметричные</th>
            <th onClick={() => handleSort('количествоПроводников')}>Количество проводников</th>
            <th onClick={() => handleSort('геометрическаяФорма')}>Геометрическая форма</th>
            <th onClick={() => handleSort('способНамотки')}>Способ намотки</th>
            <th onClick={() => handleSort('индуктивность')}>Индуктивность</th>
            <th onClick={() => handleSort('сопротивление')}>Сопротивление</th>
            <th onClick={() => handleSort('частотныйДиапазон')}>Частотный диапазон</th>
            <th onClick={() => handleSort('качествоРезонанса')}>Качество резонанса</th>
            <th onClick={() => handleSort('габариты')}>Габариты</th>
            <th onClick={() => handleSort('форма')}>Форма</th>
            <th onClick={() => handleSort('материалСердечника')}>Материал сердечника</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((bifilar, index) => (
            <tr key={index}>
              <td>{bifilar.название}</td>
              <td>{bifilar.описание}</td>
              <td>{bifilar.преимущества.join(', ')}</td>
              <td>{bifilar.недостатки.join(', ')}</td>
              <td>{bifilar.применение.join(', ')}</td>
              <td>{bifilar.доступность}</td>
              <td>{bifilar.качество}</td>
              <td>{bifilar.надежность}</td>
              <td>{bifilar.сложностьИзготовления}</td>
              <td>{bifilar.срокСлужбы}</td>
              <td>{bifilar.компонентыИзготовления.join(', ')}</td>
              <td>{bifilar.многослойные ? 'Да' : 'Нет'}</td>
              <td>{bifilar.спиральные ? 'Да' : 'Нет'}</td>
              <td>{bifilar.асимметричные ? 'Да' : 'Нет'}</td>
              <td>{bifilar.количествоПроводников}</td>
              <td>{bifilar.геометрическаяФорма}</td>
              <td>{bifilar.способНамотки}</td>
              <td>{bifilar.индуктивность}</td>
              <td>{bifilar.сопротивление}</td>
              <td>{bifilar.частотныйДиапазон}</td>
              <td>{bifilar.качествоРезонанса}</td>
              <td>{bifilar.габариты}</td>
              <td>{bifilar.форма}</td>
              <td>{bifilar.материалСердечника}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
