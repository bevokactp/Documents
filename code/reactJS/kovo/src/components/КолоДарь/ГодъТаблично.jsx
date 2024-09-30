import React, { useState, useEffect } from 'react';
import './style.css';

import { calculateDateTimeAttributes } from './convert_utils';
import useStartDateTime from './useStartDateTime';
import { maskNumberWeekdaysCircle1, maskNumberWeekdaysCircle2 } from "./const";




const holiday_filepath = '/dataConfig/holidays.json';

const seasons = ["Лето", "Овосень", "Хима", "Весна"];
const months = [
  ["Червичъ", "Плодичъ", "Листичъ"],
  ["Веничъ", "Братичъ", "Бубеничъ"],
  ["Студичъ", "Снежичъ", "Березичъ"],
  ["Цветичъ", "Красичъ", "Травичъ", "Русаличъ"]
];
const daysOfWeek = ["Перводница", "Втордникъ", "Тредница", "Четвергъ", "Пятьдница", "Собатъ"];
const daysLastMonth = ["Разница", "Двазница", "Дажница", "Сварница", "Паница", "Сестница"];

const daysInMonth = 30; // Количество дней в каждом месяце по умолчанию


const GodTable = () => {

  const [isLeapYear, setIsLeapYear] = useState(null);
  const [circleNumberYear, setCircleNumberYear] = useState(null);
  const [numberMonthYear, setNumberMonthYear] = useState(null);
  const [numberDayMonth, setNumberDayMonth] = useState(null);

  const startDateTimeKolodar = useStartDateTime();

  useEffect(() => {
    if (startDateTimeKolodar) {
      const updateTime = () => {
        const dateTimeGregorianNow = new Date();
        const result = calculateDateTimeAttributes({
          year: dateTimeGregorianNow.getFullYear(),
          month: dateTimeGregorianNow.getMonth() + 1,
          day: dateTimeGregorianNow.getDate(),
          hours: dateTimeGregorianNow.getHours(),
          minutes: dateTimeGregorianNow.getMinutes()
        }, startDateTimeKolodar);

        if (result) {
          setIsLeapYear(result.isLeapYear);
          setCircleNumberYear(result.circleNumberYear);
          setNumberMonthYear(result.numberMonthYear);
          setNumberDayMonth(result.numberDayMonth);
        }
      };
      updateTime();

      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [startDateTimeKolodar]);

  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    fetch(holiday_filepath)
      .then(response => response.json())
      .then(data => setHolidays(data))
      .catch(err => console.error('Ошибка загрузки данных:', err));
    }, []);

  // Функция для получения всех праздников на день
  const isHoliday = (month, day) => {
    const monthlyHolidays = holidays[month] || {};
    const globalHolidays = holidays[0] || {};

    // Получаем праздники для текущего месяца и глобальные праздники
    const holidaysForDayInMonth = monthlyHolidays[day] || [];
    const holidaysForDayGlobal = globalHolidays[day] || [];

    // Объединяем их
    const holidaysForDay = [...holidaysForDayInMonth, ...holidaysForDayGlobal];

    return holidaysForDay;
  };

  const determineNumberGodWeekday = ( numberWeekdayYear) => {
    if (circleNumberYear === 1)
      return maskNumberWeekdaysCircle1[numberWeekdayYear - 1];
    return maskNumberWeekdaysCircle2[numberWeekdayYear - 1];
  };

  let globalWeekNumber = 1;

  const renderMonth = (monthIndex, seasonIndex) => {
    const daysInCurrentMonth = monthIndex === 12 ? (daysLastMonth.length - (isLeapYear ? 0 : 1)) : daysInMonth;
    const daysOfWeekToUse = monthIndex === 12 ? daysLastMonth : daysOfWeek;

    // Определяем класс сезона
    const seasonClass = ['winter', 'spring', 'summer', 'autumn'][seasonIndex];

    const isRusalicMonth = months[seasonIndex][monthIndex - seasonIndex * 3] === "Русаличъ";

    return (
      <div key={monthIndex} className={`season-${seasonClass}`}>
        <h3 className="season-header">{months[seasonIndex][monthIndex - seasonIndex * 3]}</h3>
        <table>
          <thead>
            <tr>
              {daysOfWeekToUse.map((day, index) => (
                <th className="season-header" key={index}>{day}</th>
              ))}
              {!isRusalicMonth && (
                <>
                  <th className="season-header">Бог</th>
                  <th className="season-header">6дница</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(daysInCurrentMonth / daysOfWeekToUse.length) }, (_, weekIndex) => {
              const weekNumber = globalWeekNumber++;
              return (
                <tr key={weekIndex}>
                  {daysOfWeekToUse.map((_, dayIndex) => {
                    const currentDay = weekIndex * daysOfWeekToUse.length + dayIndex;
                    const isCurrentMonthDay = (monthIndex + 1 === numberMonthYear) && (currentDay === numberDayMonth);

                    if (currentDay > daysInCurrentMonth) return <td key={dayIndex}></td>;

                    const holidaysForDay = isHoliday(monthIndex + 1, currentDay);

                    // Если есть праздники на этот день, выводим их все в подсказке
                    const holidayTitle = holidaysForDay.length > 0
                      ? holidaysForDay.map(h => h.name).join('\n')  // Используем '\n' для новой строки
                      : '';

                    // Определяем самый высокий уровень праздников для выделения цвета
                    const highestLevel = holidaysForDay.length > 0
                      ? Math.max(...holidaysForDay.map(h => h.level))
                      : null;

                    // Выделяем Собат
                    const isSobat = dayIndex === 5;  // Собат (выходной) это 6й день (index = 5)

                    return (
                      <td
                        key={dayIndex}
                        className={`
                          ${highestLevel ? `holiday level-${highestLevel}` : ''}
                          ${isSobat ? 'sobat' : ''}
                          ${isCurrentMonthDay ? 'current-day' : ''}  {/* Выделение текущего дня */}
                        `}
                        title={holidayTitle} // Подсказка с названиями праздников через \n
                      >
                        <div className={holidaysForDay.length > 0 ? 'holiday-number' : ''}>
                          {currentDay}
                        </div>
                      </td>
                    );
                  })}
                  {!isRusalicMonth && (
                    <>
                      <td>{determineNumberGodWeekday(weekNumber)}</td>
                      <td>{weekNumber}</td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {seasons.map((season, seasonIndex) => (
        <div key={seasonIndex} className={`season-${['winter', 'spring', 'summer', 'autumn'][seasonIndex]}`}>
          <h2 className="season-header">{season}</h2>
          <div className="months">
            {months[seasonIndex].map((_, monthIndex) => renderMonth(monthIndex + seasonIndex * 3, seasonIndex))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GodTable;
