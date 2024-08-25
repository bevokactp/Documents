import React, { useState } from 'react';

const converterData = [
  {
    название: 'Регуляторы на основе трех точек',
    описание: 'Регуляторы, использующие трехточечное управление для стабилизации выходного напряжения.',
    преимущества: ['Высокая точность', 'Хорошая стабильность'],
    недостатки: ['Сложность конструкции', 'Меньшая эффективность по сравнению с импульсными'],
    применение: ['Питание прецизионных приборов', 'Измерительная техника'],
    доступность: 4,
    качество: 5,
    надежность: 5,
    сложностьИзготовления: 4,
    срокСлужбы: 10,
    компонентыИзготовления: ['Транзисторы', 'Резисторы', 'Конденсаторы'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '12V-5V',
    выходноеНапряжение: 'Стабильное',
    выходнойТок: '0.5A',
    входноеНапряжение: '12V',
    эффективность: '70%',
    стабильность: 'Высокая',
    рипплИШум: 'Низкий',
    частотаРаботы: '10Hz',
    точностьРегулировки: '0.5%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-20°C до 70°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрузки, короткого замыкания',
  },
  {
    название: 'Регуляторы с переменным выходом',
    описание: 'Регуляторы, обеспечивающие возможность изменения выходного напряжения в широком диапазоне.',
    преимущества: ['Гибкость в настройке выходного напряжения', 'Широкий диапазон регулировки'],
    недостатки: ['Сложность схемы', 'Менее стабильное выходное напряжение'],
    применение: ['Настраиваемые источники питания', 'Измерительное оборудование'],
    доступность: 4,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 3,
    срокСлужбы: 8,
    компонентыИзготовления: ['Микросхемы управления', 'Конденсаторы', 'Резисторы'],
    способУправления: 'Импульсный',
    тип: 'Переменный',
    входноеВыходноеНапряжение: '12V-5V',
    выходноеНапряжение: 'Регулируемое',
    выходнойТок: '1A',
    входноеНапряжение: '12V',
    эффективность: '75%',
    стабильность: 'Средняя',
    рипплИШум: 'Средний',
    частотаРаботы: '50Hz',
    точностьРегулировки: '2%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-10°C до 60°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перегрева и перенапряжения',
  },
  {
    название: 'Преобразователи понижающего типа',
    описание: 'Преобразователи, которые понижают напряжение с входного уровня до выходного.',
    преимущества: ['Высокая эффективность', 'Простота конструкции'],
    недостатки: ['Ограниченный диапазон выходных напряжений', 'Тепловыделение при высоких токах'],
    применение: ['Питание микроконтроллеров', 'Зарядные устройства'],
    доступность: 5,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 2,
    срокСлужбы: 10,
    компонентыИзготовления: ['Индуктивности', 'Конденсаторы', 'Микросхемы управления'],
    способУправления: 'Импульсный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '12V-5V',
    выходноеНапряжение: '5V',
    выходнойТок: '2A',
    входноеНапряжение: '12V',
    эффективность: '90%',
    стабильность: 'Высокая',
    рипплИШум: 'Низкий',
    частотаРаботы: '50kHz',
    точностьРегулировки: '1%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-40°C до 85°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрузки и короткого замыкания',
  },
  {
    название: 'Преобразователи повышающего типа',
    описание: 'Преобразователи, которые повышают напряжение с входного уровня до выходного.',
    преимущества: ['Компактный размер', 'Высокая эффективность'],
    недостатки: ['Чувствительность к нагрузке', 'Сложность стабилизации'],
    применение: ['Светодиодные драйверы', 'Портативные устройства'],
    доступность: 4,
    качество: 4,
    надежность: 3,
    сложностьИзготовления: 3,
    срокСлужбы: 8,
    компонентыИзготовления: ['Индуктивности', 'Диоды', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '5V-12V',
    выходноеНапряжение: '12V',
    выходнойТок: '1A',
    входноеНапряжение: '5V',
    эффективность: '85%',
    стабильность: 'Средняя',
    рипплИШум: 'Средний',
    частотаРаботы: '60kHz',
    точностьРегулировки: '2%',
    размеры: 'Миниатюрные',
    материалы: 'Пластик, металл',
    температурныйДиапазон: '-20°C до 70°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перенапряжения',
  },
  {
    название: 'Преобразователи понижающе-повышающие типа',
    описание: 'Преобразователи, которые могут как повышать, так и понижать напряжение в зависимости от ситуации.',
    преимущества: ['Гибкость использования', 'Подходит для широкого диапазона напряжений'],
    недостатки: ['Сложная схема управления', 'Низкая эффективность при высоких нагрузках'],
    применение: ['Автомобильные системы', 'Портативные устройства питания'],
    доступность: 3,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 4,
    срокСлужбы: 7,
    компонентыИзготовления: ['Трансформаторы', 'Микросхемы управления', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Переменный',
    входноеВыходноеНапряжение: '5V-24V',
    выходноеНапряжение: 'Регулируемое',
    выходнойТок: '2A',
    входноеНапряжение: '5V',
    эффективность: '80%',
    стабильность: 'Средняя',
    рипплИШум: 'Средний',
    частотаРаботы: '70kHz',
    точностьРегулировки: '1.5%',
    размеры: 'Средние',
    материалы: 'Металл, керамика',
    температурныйДиапазон: '-30°C до 80°C',
    уровеньШумов: 'Низкий',
    защита: 'Тепловая защита, защита от перегрузки',
  },
  {
    название: 'Линейные стабилизаторы',
    описание: 'Предоставляют стабильное выходное напряжение при изменении входного напряжения и нагрузки.',
    преимущества: ['Простота использования', 'Отличная точность выходного напряжения'],
    недостатки: ['Низкая эффективность при высоких токах', 'Тепловыделение'],
    применение: ['Питание чувствительных электронных устройств', 'Аудиотехника'],
    доступность: 5,
    качество: 5,
    надежность: 5,
    сложностьИзготовления: 2,
    срокСлужбы: 12,
    компонентыИзготовления: ['Резисторы', 'Конденсаторы', 'Транзисторы'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '15V-5V',
    выходноеНапряжение: '5V',
    выходнойТок: '0.5A',
    входноеНапряжение: '15V',
    эффективность: '60%',
    стабильность: 'Очень высокая',
    рипплИШум: 'Очень низкий',
    частотаРаботы: 'DC',
    точностьРегулировки: '0.1%',
    размеры: 'Большие',
    материалы: 'Металл, алюминий',
    температурныйДиапазон: '-20°C до 50°C',
    уровеньШумов: 'Очень низкий',
    защита: 'Защита от перегрева, перегрузки',
  },
  {
    название: 'Понижающие преобразователи',
    описание: 'Преобразуют высокое входное напряжение в более низкое выходное напряжение.',
    преимущества: ['Высокая эффективность', 'Простота конструкции'],
    недостатки: ['Ограниченный диапазон напряжений', 'Тепловыделение при высоких токах'],
    применение: ['Питание микроконтроллеров', 'Зарядные устройства'],
    доступность: 5,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 2,
    срокСлужбы: 10,
    компонентыИзготовления: ['Индуктивности', 'Конденсаторы', 'Микросхемы управления'],
    способУправления: 'Импульсный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '12V-5V',
    мощность: '100W',
    энергетическаяЭффективность: '90%',
    частотаРаботы: '50kHz',
    точностьРегулировки: '1%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-40°C до 85°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрузки и короткого замыкания',
  },
  {
    название: 'Повышающие преобразователи',
    описание: 'Повышают низкое входное напряжение до более высокого выходного напряжения.',
    преимущества: ['Компактный размер', 'Высокая эффективность'],
    недостатки: ['Чувствительность к нагрузке', 'Сложность стабилизации'],
    применение: ['Светодиодные драйверы', 'Портативные устройства'],
    доступность: 4,
    качество: 4,
    надежность: 3,
    сложностьИзготовления: 3,
    срокСлужбы: 8,
    компонентыИзготовления: ['Индуктивности', 'Диоды', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '5V-12V',
    мощность: '50W',
    энергетическаяЭффективность: '85%',
    частотаРаботы: '60kHz',
    точностьРегулировки: '2%',
    размеры: 'Миниатюрные',
    материалы: 'Пластик, металл',
    температурныйДиапазон: '-20°C до 70°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перенапряжения',
  },
  {
    название: 'Понижающе-повышающие преобразователи',
    описание: 'Позволяют как повышать, так и понижать напряжение в зависимости от ситуации.',
    преимущества: ['Гибкость использования', 'Подходит для широкого диапазона напряжений'],
    недостатки: ['Сложная схема управления', 'Низкая эффективность при высоких нагрузках'],
    применение: ['Автомобильные системы', 'Портативные устройства питания'],
    доступность: 3,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 4,
    срокСлужбы: 7,
    компонентыИзготовления: ['Трансформаторы', 'Микросхемы управления', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Переменный',
    входноеВыходноеНапряжение: '5V-24V',
    мощность: '150W',
    энергетическаяЭффективность: '80%',
    частотаРаботы: '70kHz',
    точностьРегулировки: '1.5%',
    размеры: 'Средние',
    материалы: 'Металл, керамика',
    температурныйДиапазон: '-30°C до 80°C',
    уровеньШумов: 'Низкий',
    защита: 'Тепловая защита, защита от перегрузки',
  },
  {
    название: 'Инвертирующие преобразователи',
    описание: 'Преобразуют положительное напряжение в отрицательное.',
    преимущества: ['Простая конструкция', 'Низкие потери мощности'],
    недостатки: ['Ограниченный диапазон выходных напряжений', 'Сложности с заземлением'],
    применение: ['Аудиоустройства', 'Стабилизация питания'],
    доступность: 4,
    качество: 3,
    надежность: 4,
    сложностьИзготовления: 2,
    срокСлужбы: 6,
    компонентыИзготовления: ['Диоды', 'Транзисторы', 'Индуктивности'],
    способУправления: 'Линейный',
    тип: 'Инвертор',
    входноеВыходноеНапряжение: '12V до -12V',
    мощность: '20W',
    энергетическаяЭффективность: '75%',
    частотаРаботы: '40kHz',
    точностьРегулировки: '3%',
    размеры: 'Компактные',
    материалы: 'Металл',
    температурныйДиапазон: '-10°C до 70°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от короткого замыкания',
  },
  {
    название: 'Выпрямители однополупериодные',
    описание: 'Используют один диод для выпрямления половины входного сигнала переменного тока.',
    преимущества: ['Простота конструкции', 'Низкая стоимость'],
    недостатки: ['Низкая эффективность', 'Высокий уровень пульсаций'],
    применение: ['Зарядные устройства', 'Простые источники питания'],
    доступность: 5,
    качество: 2,
    надежность: 3,
    сложностьИзготовления: 1,
    срокСлужбы: 5,
    компонентыИзготовления: ['Диод', 'Конденсатор'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '220V AC до 12V DC',
    мощность: '50W',
    энергетическаяЭффективность: '60%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '5%',
    размеры: 'Средние',
    материалы: 'Пластик, металл',
    температурныйДиапазон: '0°C до 50°C',
    уровеньШумов: 'Высокий',
    защита: 'Отсутствует',
  },
  {
    название: 'Выпрямители двухполупериодные',
    описание: 'Используют два диода для выпрямления обоих полупериодов входного сигнала переменного тока.',
    преимущества: ['Повышенная эффективность', 'Уменьшенные пульсации'],
    недостатки: ['Сложнее конструкция', 'Требует трансформатор'],
    применение: ['Источники питания средней мощности', 'Аудиоустройства'],
    доступность: 4,
    качество: 3,
    надежность: 4,
    сложностьИзготовления: 2,
    срокСлужбы: 6,
    компонентыИзготовления: ['Два диода', 'Трансформатор', 'Конденсатор'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '220V AC до 12V DC',
    мощность: '100W',
    энергетическаяЭффективность: '70%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '4%',
    размеры: 'Средние',
    материалы: 'Пластик, металл',
    температурныйДиапазон: '-10°C до 50°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перегрузки',
  },
  {
    название: 'Выпрямители мостовые',
    описание: 'Используют четыре диода для эффективного выпрямления обоих полупериодов сигнала.',
    преимущества: ['Высокая эффективность', 'Низкий уровень пульсаций'],
    недостатки: ['Сложная сборка', 'Требует большего числа компонентов'],
    применение: ['Промышленные источники питания', 'Домашние электрические устройства'],
    доступность: 4,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 3,
    срокСлужбы: 10,
    компонентыИзготовления: ['Четыре диода', 'Трансформатор', 'Конденсатор'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '220V AC до 12V DC',
    мощность: '200W',
    энергетическаяЭффективность: '80%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '2%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-10°C до 60°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перегрева и короткого замыкания',
  },
  {
    название: 'Линейные стабилизаторы',
    описание: 'Предоставляют стабильное выходное напряжение при изменении входного напряжения и нагрузки.',
    преимущества: ['Простота использования', 'Отличная точность выходного напряжения'],
    недостатки: ['Низкая эффективность при высоких токах', 'Тепловыделение'],
    применение: ['Питание чувствительных электронных устройств', 'Аудиотехника'],
    доступность: 5,
    качество: 5,
    надежность: 5,
    сложностьИзготовления: 2,
    срокСлужбы: 15,
    компонентыИзготовления: ['Транзисторы', 'Конденсаторы', 'Резисторы'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '12V-5V',
    мощность: '10W',
    энергетическаяЭффективность: '60%',
    частотаРаботы: '10Hz',
    точностьРегулировки: '0.5%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-20°C до 70°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрева, перегрузки',
  },
  {
    название: 'Импульсные стабилизаторы',
    описание: 'Используют переключение для регулировки выходного напряжения и улучшения эффективности.',
    преимущества: ['Высокая эффективность', 'Малые размеры'],
    недостатки: ['Сложность конструкции', 'Электромагнитные помехи'],
    применение: ['Компьютеры', 'Телекоммуникационное оборудование'],
    доступность: 4,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 3,
    срокСлужбы: 12,
    компонентыИзготовления: ['Полупроводники', 'Индуктивности', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '12V-5V',
    мощность: '50W',
    энергетическаяЭффективность: '85%',
    частотаРаботы: '100kHz',
    точностьРегулировки: '1%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-30°C до 85°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перенапряжения и перегрева',
  },
  {
    название: 'Регуляторы напряжения с фазовым управлением',
    описание: 'Регулируют напряжение путем управления фазовым углом переменного тока.',
    преимущества: ['Простота управления', 'Хорошая совместимость с нагрузками'],
    недостатки: ['Могут создавать гармонические искажения', 'Необходимость фильтрации'],
    применение: ['Регулирование освещения', 'Управление электродвигателями'],
    доступность: 4,
    качество: 3,
    надежность: 4,
    сложностьИзготовления: 3,
    срокСлужбы: 8,
    компонентыИзготовления: ['Тиристоры', 'Резисторы', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Переменный',
    входноеВыходноеНапряжение: '220V AC',
    мощность: '1000W',
    энергетическаяЭффективность: '70%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '5%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-10°C до 60°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перегрева и короткого замыкания',
  },
  {
    название: 'Регуляторы напряжения с широтно-импульсной модуляцией',
    описание: 'Регулируют напряжение путем изменения ширины импульсов в сигнале.',
    преимущества: ['Высокая эффективность', 'Широкий диапазон регулировки'],
    недостатки: ['Сложность схемы', 'Электромагнитные помехи'],
    применение: ['Питание двигателей', 'Управление освещением'],
    доступность: 4,
    качество: 4,
    надежность: 4,
    сложностьИзготовления: 4,
    срокСлужбы: 10,
    компонентыИзготовления: ['Микросхемы управления', 'Конденсаторы', 'Индуктивности'],
    способУправления: 'Импульсный',
    тип: 'Переменный',
    входноеВыходноеНапряжение: '12V-5V',
    мощность: '100W',
    энергетическаяЭффективность: '90%',
    частотаРаботы: '100kHz',
    точностьРегулировки: '1%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-20°C до 75°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрева и перенапряжения',
  },
  {
    название: 'Трансформаторы',
    описание: 'Изменяют уровень напряжения переменного тока в зависимости от числа витков обмоток.',
    преимущества: ['Надежность', 'Отсутствие активных компонентов'],
    недостатки: ['Большие размеры', 'Меньшая эффективность при высоких частотах'],
    применение: ['Питание электрических устройств', 'Изоляция цепей'],
    доступность: 5,
    качество: 5,
    надежность: 5,
    сложностьИзготовления: 3,
    срокСлужбы: 20,
    компонентыИзготовления: ['Медные провода', 'Ядро из железа'],
    способУправления: 'Линейный',
    тип: 'Прямой',
    входноеВыходноеНапряжение: '220V AC',
    мощность: '500W',
    энергетическаяЭффективность: '95%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '0.5%',
    размеры: 'Большие',
    материалы: 'Металл, изоляция',
    температурныйДиапазон: '-10°C до 60°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрева',
  },
  {
    название: 'Чистые синусоидальные инверторы',
    описание: 'Создают выходное напряжение, которое является точной синусоидой.',
    преимущества: ['Высокое качество выходного сигнала', 'Совместимость с чувствительными устройствами'],
    недостатки: ['Высокая стоимость', 'Сложность конструкции'],
    применение: ['Автономные солнечные системы', 'Электрические системы резервного питания'],
    доступность: 3,
    качество: 5,
    надежность: 5,
    сложностьИзготовления: 5,
    срокСлужбы: 12,
    компонентыИзготовления: ['Микросхемы управления', 'Инверторные трансформаторы', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Инвертор',
    входноеВыходноеНапряжение: '12V-220V',
    мощность: '1000W',
    энергетическаяЭффективность: '90%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '1%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-20°C до 60°C',
    уровеньШумов: 'Низкий',
    защита: 'Защита от перегрева и перенапряжения',
  },
  {
    название: 'Модифицированные синусоидальные инверторы',
    описание: 'Создают выходное напряжение, которое близко к синусоиде, но не идеально.',
    преимущества: ['Меньшая стоимость', 'Простота конструкции'],
    недостатки: ['Менее точный выходной сигнал', 'Необходимость фильтрации'],
    применение: ['Питание бытовой электроники', 'Системы резервного питания'],
    доступность: 4,
    качество: 3,
    надежность: 4,
    сложностьИзготовления: 3,
    срокСлужбы: 10,
    компонентыИзготовления: ['Микросхемы управления', 'Трансформаторы', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Инвертор',
    входноеВыходноеНапряжение: '12V-220V',
    мощность: '500W',
    энергетическаяЭффективность: '80%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '2%',
    размеры: 'Средние',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-10°C до 60°C',
    уровеньШумов: 'Средний',
    защита: 'Защита от перенапряжения и перегрева',
  },
  {
    название: 'Квадратурные инверторы',
    описание: 'Создают выходное напряжение в виде квадратной волны.',
    преимущества: ['Простота конструкции', 'Низкая стоимость'],
    недостатки: ['Низкое качество выходного сигнала', 'Не подходят для чувствительных устройств'],
    применение: ['Простые источники питания', 'Малые нагрузки'],
    доступность: 4,
    качество: 2,
    надежность: 3,
    сложностьИзготовления: 2,
    срокСлужбы: 5,
    компонентыИзготовления: ['Транзисторы', 'Диоды', 'Конденсаторы'],
    способУправления: 'Импульсный',
    тип: 'Инвертор',
    входноеВыходноеНапряжение: '12V-220V',
    мощность: '100W',
    энергетическаяЭффективность: '70%',
    частотаРаботы: '50Hz',
    точностьРегулировки: '5%',
    размеры: 'Компактные',
    материалы: 'Металл, пластик',
    температурныйДиапазон: '-10°C до 50°C',
    уровеньШумов: 'Высокий',
    защита: 'Защита от короткого замыкания',
  }
  // More converter types can be added here following the same pattern...
];



const PowerConverterList = () => {
  const [data, setData] = useState(converterData);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let sortedData = [...data];
    let direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    sortedData.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы преобразователей</h1>
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
            <th onClick={() => handleSort('способУправления')}>Способ управления</th>
            <th onClick={() => handleSort('тип')}>Тип</th>
            <th onClick={() => handleSort('входноеВыходноеНапряжение')}>Входное и выходное напряжение</th>
            <th onClick={() => handleSort('мощность')}>Мощность</th>
            <th onClick={() => handleSort('энергетическаяЭффективность')}>Энергетическая эффективность</th>
            <th onClick={() => handleSort('частотаРаботы')}>Частота работы</th>
            <th onClick={() => handleSort('точностьРегулировки')}>Точность регулировки</th>
            <th onClick={() => handleSort('размеры')}>Размеры</th>
            <th onClick={() => handleSort('материалы')}>Материалы</th>
            <th onClick={() => handleSort('температурныйДиапазон')}>Температурный диапазон</th>
            <th onClick={() => handleSort('уровеньШумов')}>Уровень шумов</th>
            <th onClick={() => handleSort('защита')}>Защита</th>
            <th onClick={() => handleSort('срокСлужбы')}>Срок службы</th>
            <th onClick={() => handleSort('входноеВыходноеНапряжение')}>Входное/выходное напряжение</th>
            <th onClick={() => handleSort('выходноеНапряжение')}>Выходное напряжение</th>
            <th onClick={() => handleSort('выходнойТок')}>Выходной ток</th>
            <th onClick={() => handleSort('входноеНапряжение')}>Входное напряжение</th>
            <th onClick={() => handleSort('эффективность')}>Эффективность</th>
            <th onClick={() => handleSort('стабильность')}>Стабильность</th>
            <th onClick={() => handleSort('рипплИШум')}>Риппл и шум</th>

          </tr>
        </thead>
        <tbody>
          {data.map((converter, index) => (
            <tr key={index}>
              <td>{converter.название}</td>
              <td>{converter.описание}</td>
              <td>{converter.преимущества.join(', ')}</td>
              <td>{converter.недостатки.join(', ')}</td>
              <td>{converter.применение.join(', ')}</td>
              <td>{converter.доступность}</td>
              <td>{converter.качество}</td>
              <td>{converter.надежность}</td>
              <td>{converter.сложностьИзготовления}</td>
              <td>{converter.срокСлужбы}</td>
              <td>{converter.компонентыИзготовления.join(', ')}</td>
              <td>{converter.способУправления}</td>
              <td>{converter.тип}</td>
              <td>{converter.входноеВыходноеНапряжение}</td>
              <td>{converter.мощность}</td>
              <td>{converter.энергетическаяЭффективность}</td>
              <td>{converter.частотаРаботы}</td>
              <td>{converter.точностьРегулировки}</td>
              <td>{converter.размеры}</td>
              <td>{converter.материалы}</td>
              <td>{converter.температурныйДиапазон}</td>
              <td>{converter.уровеньШумов}</td>
              <td>{converter.защита}</td>
              <td>{converter.выходноеНапряжение}</td>
              <td>{converter.выходнойТок}</td>
              <td>{converter.входноеНапряжение}</td>
              <td>{converter.эффективность}</td>
              <td>{converter.стабильность}</td>
              <td>{converter.рипплИШум}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PowerConverterList;
