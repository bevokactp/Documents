import React, { useState } from "react";
import { calculateDateTimeAttributes } from "./convert_utils";

import useStartDateTime from "./useStartDateTime";

export default function DatetimeConvert() {
  const now = new Date();
  const startDateTimeKolodar = useStartDateTime();


  const [input, setInput] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
  });


  const [result, setResult] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleConvert = () => {
    const result = calculateDateTimeAttributes(input, startDateTimeKolodar);
    setResult(result);
  };

  return (
    <div>
      <div>
        <h3>Григоріан</h3>
        <label> Year: <input type="number" name="year" value={input.year} onChange={handleChange} /> </label>
        <label> Month: <input type="number" name="month" value={input.month} onChange={handleChange} /> </label>
        <label> Day: <input type="number" name="day" value={input.day} onChange={handleChange} /> </label>
        <label> Hours: <input type="number" name="hours" value={input.hours} onChange={handleChange} /> </label>
        <label> Minutes: <input type="number" name="minutes" value={input.minutes} onChange={handleChange} /> </label>
        <button onClick={handleConvert}>Convert</button>
      </div>
        <h3>Старо</h3>
      {Object.keys(result).length > 0 && (
        <div>
          <p>Год: {result.year}</p>
          <p>Год бог: {result.numberYear}</p>
          <p>Круг бога: {result.circleNumberYear}</p>
          <p>Сезон года: {result.numberSeasonYear}</p>
          <p>Месяц года: {result.numberMonthYear}</p>
          <p>Бог 6дницы: {result.numberGodWeekday}</p>
          <p>6дница года: {result.numberWeekdayYear}</p>
          <p>Сутки года: {result.numberDayYear}</p>
          <p>Сутки M/Ж: {result.sexDayYear !== null ? result.sexDayYear : 'Loading...'}</p>
          <p>Сутки сезона: {result.numberDaySeason}</p>
          <p>Сутки месяца: {result.numberDayMonth}</p>
          <p>Сутки 6дницы: {result.numberDayWeekday}</p>
          <p>Час: {result.numberHour}</p>
          <p>Махаминута: {result.number5Minute}</p>
          <p>Минута: {result.numberMinute}</p>
        </div>
      )}
    </div>
  );
}
