
import { GOSPODA, maskNumberWeekdaysCircle1, maskNumberWeekdaysCircle2 } from "./const";

export const getTime = (start_datetime) => {
  const now = new Date();

  if (!start_datetime) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const startDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    start_datetime.hours,
    start_datetime.minutes,
    start_datetime.seconds
  );

  let timeDiff = now - startDay;
  if (timeDiff < 0) {
    const startPreviousDay = new Date(startDay.getTime() - 24 * 60 * 60 * 1000);
    timeDiff = now - startPreviousDay;
  }

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return {
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
};

const getYearfromGregorian = (
  dateTimeGregorian,
  dateTimeGregorianYear,
  dateTimeNovoLeto
) => {
  const year = dateTimeGregorianYear + dateTimeNovoLeto.getFullYear();

  var dateTimeNovoLetoYear = new Date(
    dateTimeGregorian.getFullYear(),
    dateTimeNovoLeto.getMonth(),
    dateTimeNovoLeto.getDate(),
    dateTimeNovoLeto.getHours(),
    dateTimeNovoLeto.getMinutes(),
    dateTimeNovoLeto.getSeconds()
  );
  const isAfterNovoLeto = dateTimeGregorian > dateTimeNovoLetoYear;
  return year + (isAfterNovoLeto ? 1 : 0);
};

const determineLeapYear = (year) => {
  const baseYear = 7502; // 2000 год
  return (year - baseYear) % 4 === 0;
};

const getNumberYear = (year) => {
  return ((year - 1) % 24) + 1;
};

const determineCircleNumberYear = (number_year) => {
  return 1 <= number_year && number_year <= 12 ? 1 : 2;
};

const determineNumberDayYear = (
  dateTimeGregorian,
  dateTimeNovoLeto
) => {
  var dateTimeNovoLetoYear = new Date(
    dateTimeGregorian.getFullYear(),
    dateTimeNovoLeto.getMonth(),
    dateTimeNovoLeto.getDate(),
    dateTimeNovoLeto.getHours(),
    dateTimeNovoLeto.getMinutes(),
    dateTimeNovoLeto.getSeconds()
  );

  if (dateTimeNovoLetoYear > dateTimeGregorian) {
    dateTimeNovoLetoYear = new Date(
      dateTimeGregorian.getFullYear() - 1,
      dateTimeNovoLeto.getMonth(),
      dateTimeNovoLeto.getDate(),
      dateTimeNovoLeto.getHours(),
      dateTimeNovoLeto.getMinutes(),
      dateTimeNovoLeto.getSeconds()
    );
  }
  return (
    Math.floor(
      (dateTimeGregorian - dateTimeNovoLetoYear) / (1000 * 60 * 60 * 24)
    )
  );
};

const determineSexDayYear = (numberDayYear) => {
  return numberDayYear % 2;
}

const determineNumberSeasonYear = (numberDayYear) => {
  if (numberDayYear <= 90) return 1;
  if (numberDayYear <= 180) return 2;
  if (numberDayYear <= 270) return 3;
  return 4;
};

const determineNumberMonthYear = (numberDayYear) => {
  if (numberDayYear <= 360) return Math.ceil(numberDayYear / 30);
  return 13; // 13th month for the remaining 5/6 days
};

const determineNumberWeekdayYear = (numberDayYear, numberMonthYear) => {
  if (numberMonthYear === 13) return 61;
  return Math.ceil(numberDayYear / 6); // 6 days per week
};

const determineNumberDaySeason = (
  numberDayYear,
  numberMonthYear,
  numberDayMonth
) => {
  if (numberMonthYear === 13) return 90 + numberDayMonth;
  return ((numberDayYear - 1) % 90) + 1;
};

const determineNumberDayMonth = (numberDayYear) => {
  return ((numberDayYear - 1) % 30) + 1;
};

const determineNumberDayWeekday = (numberDayYear) => {
  return ((numberDayYear - 1) % 6) + 1;
};

const determineNumberGodWeekday = (
  numberWeekdayYear,
  circleNumberYear,
  numberDayWeekday
) => {
  if (numberWeekdayYear === 61) {
    return GOSPODA[numberDayWeekday];
  }

  if (circleNumberYear === 1)
    return maskNumberWeekdaysCircle1[numberWeekdayYear - 1];
  return maskNumberWeekdaysCircle2[numberWeekdayYear - 1];
};

const determineNumberHour = (Time) => {
  return Time.hours + 1;
};

const determineNumber5Minute = (Time) => {
  return Math.floor(Time.minutes / 5) + 1;
};

const determineNumberMinute = (Time) => {
  return Time.minutes + 1;
};

export const calculateDateTimeAttributes = (input, startDateTimeKolodar) => {
  if (!startDateTimeKolodar) return null;

  const dateTimeGregorian = new Date(
    input.year,
    input.month - 1,
    input.day,
    input.hours,
    input.minutes,
    0
  );
  const dateTimeNovoLeto = new Date(
    startDateTimeKolodar.year,
    startDateTimeKolodar.month - 1,
    startDateTimeKolodar.day,
    startDateTimeKolodar.hours,
    startDateTimeKolodar.minutes,
    startDateTimeKolodar.seconds
  );

  const year = getYearfromGregorian(
    dateTimeGregorian,
    input.year,
    dateTimeNovoLeto
  );
  const isLeapYear = determineLeapYear(year);
  const numberYear = getNumberYear(year);
  const circleNumberYear = determineCircleNumberYear(numberYear);
  const numberDayYear = determineNumberDayYear(
    dateTimeGregorian,
    dateTimeNovoLeto
  );
  const sexDayYear = determineSexDayYear(numberDayYear);
  const numberSeasonYear = determineNumberSeasonYear(numberDayYear);
  const numberMonthYear = determineNumberMonthYear(numberDayYear);
  const numberWeekdayYear = determineNumberWeekdayYear(
    numberDayYear,
    numberMonthYear
  );
  const numberDayMonth = determineNumberDayMonth(numberDayYear);
  const numberDaySeason = determineNumberDaySeason(
    numberDayYear,
    numberMonthYear,
    numberDayMonth
  );
  const numberDayWeekday = determineNumberDayWeekday(numberDayYear);
  const numberGodWeekday = determineNumberGodWeekday(
    numberWeekdayYear,
    circleNumberYear,
    numberDayWeekday
  );
  const time = getTime(startDateTimeKolodar);
  const numberHour = determineNumberHour(time);
  const number5Minute = determineNumber5Minute(time);
  const numberMinute = determineNumberMinute(time);

  return {
    year,
    isLeapYear,
    numberYear,
    circleNumberYear,
    numberDayYear,
    sexDayYear,
    numberSeasonYear,
    numberMonthYear,
    numberWeekdayYear,
    numberDaySeason,
    numberDayMonth,
    numberDayWeekday,
    numberGodWeekday,
    numberHour,
    number5Minute,
    numberMinute,
  };
};
