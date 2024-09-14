
import React, { useState, useEffect } from 'react';

import { calculateDateTimeAttributes } from './convert_utils';
import useStartDateTime from './useStartDateTime';


export default function DatetimeReal () {

  const [Time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [year, setYear] = useState(null);
  const [isLeapYear, setIsLeapYear] = useState(null);
  const [numberYear, setNumberYear] = useState(null);
  const [circleNumberYear, setCircleNumberYear] = useState(null);
  const [numberSeasonYear, setNumberSeasonYear] = useState(null);
  const [numberMonthYear, setNumberMonthYear] = useState(null);
  const [numberWeekdayYear, setNumberWeekDay] = useState(null);
  const [numberDayYear, setNumberDayYear] = useState(null);
  const [sexDayYear, setSexDayYear] = useState(null);
  const [numberDaySeason, setNumberDaySeason] = useState(null);
  const [numberDayMonth, setNumberDayMonth] = useState(null);
  const [numberDayWeekday, setNumberDayWeekday] = useState(null);
  const [numberGodWeekday, setnumberGodWeekday] = useState(null);
  const [numberHour, setNumberHour] = useState(null);
  const [number5Minute, setNumber5Minute] = useState(null);
  const [numberMinute, setNumberMinute] = useState(null);

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
          setYear(result.year);
          setIsLeapYear(result.isLeapYear);
          setNumberYear(result.numberYear);
          setCircleNumberYear(result.circleNumberYear);
          setNumberSeasonYear(result.numberSeasonYear);
          setNumberMonthYear(result.numberMonthYear);
          setNumberWeekDay(result.numberWeekdayYear);
          setNumberDayYear(result.numberDayYear);
          setSexDayYear(result.sexDayYear);
          setNumberDaySeason(result.numberDaySeason);
          setNumberDayMonth(result.numberDayMonth);
          setNumberDayWeekday(result.numberDayWeekday);
          setnumberGodWeekday(result.numberGodWeekday);
          setTime({ hours: dateTimeGregorianNow.getHours(), minutes: dateTimeGregorianNow.getMinutes(), seconds: dateTimeGregorianNow.getSeconds() });
          setNumberHour(result.numberHour);
          setNumber5Minute(result.number5Minute);
          setNumberMinute(result.numberMinute);
        }
      };
      updateTime();

      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [startDateTimeKolodar]);

  return (
      <div>
        <h3>Старо Время</h3>
        <p>Начало { startDateTimeKolodar ?
          `${String(startDateTimeKolodar.hours).padStart(2, '0')}:${String(startDateTimeKolodar.minutes).padStart(2, '0')}:${String(startDateTimeKolodar.seconds).padStart(2, '0')}
          ${String(startDateTimeKolodar.month).padStart(2, '0')}.${String(startDateTimeKolodar.day).padStart(2, '0')}.${startDateTimeKolodar.year}`
          : 'Loading...' }</p>
        <p>Время {`${String(numberHour).padStart(2, '0')}:${String(numberMinute).padStart(2, '0')}:${String(Time.seconds).padStart(2, '0')}`}</p>
        <p>Год: {year !== null ? year : 'Loading...'}</p>
        <p>Высокосность: {isLeapYear !== null ? (isLeapYear ? 1 : 0) : 'Loading...'}</p>
        <p>Год бог: {numberYear !== null ? numberYear : 'Loading...'}</p>
        <p>Круг бога: {circleNumberYear !== null ? circleNumberYear : 'Loading...'}</p>
        <p>Сезон года: {numberSeasonYear !== null ? numberSeasonYear : 'Loading...'}</p>
        <p>Месяц года: {numberMonthYear !== null ? numberMonthYear : 'Loading...'}</p>
        <p>6дница года: {numberWeekdayYear !== null ? numberWeekdayYear : 'Loading...'}</p>
        <p>6дница бог: {numberGodWeekday !== null ? numberGodWeekday : 'Loading...'}</p>
        <p>Сутки года: {numberDayYear !== null ? numberDayYear : 'Loading...'}</p>
        <p>Сутки сезона: {numberDaySeason !== null ? numberDaySeason : 'Loading...'}</p>
        <p>Сутки месяца: {numberDayMonth !== null ? numberDayMonth : 'Loading...'}</p>
        <p>Сутки 6дницы: {numberDayWeekday !== null ? numberDayWeekday : 'Loading...'}</p>
        <p>Сутки M/Ж: {sexDayYear !== null ? sexDayYear : 'Loading...'}</p>
        <p>Час: {numberHour !== null ? numberHour : 'Loading...'}</p>
        <p>Махаминута: {number5Minute !== null ? number5Minute : 'Loading...'}</p>
        <p>Минута: {numberMinute !== null ? numberMinute : 'Loading...'}</p>
      </div>
  );
}
