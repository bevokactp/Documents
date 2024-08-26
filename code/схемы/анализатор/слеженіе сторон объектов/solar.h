#ifndef SOLAR_H
#define SOLAR_H

#include <math.h>

float calculateSolarAltitude(float latitude, float longitude, int year, int month, int day, int hour, int minute) {
    // Определение времени в UT (Universal Time)
    float jd = 367 * year - int((7 * (year + int((month + 9) / 12))) / 4) + int((275 * month) / 9) + day + 1721013.5;
    float dayFraction = (hour + minute / 60.0) / 24.0;
    jd += dayFraction;

    // Параметры для вычисления солнечной деклинации
    float n = jd - 2451545.0; // Количество дней с 2000-01-01
    float L0 = 280.460 + 0.9856474 * n; // Долгота Солнца в эклиптической долготы
    float M = 357.528 + 0.9856003 * n; // Среднее аномальное положение
    float e = 0.01671; // Экцентриситет орбиты Земли

    // Угловое положение Солнца
    float C = (1.9148 - 0.004817 * n - 0.000014 * n * n) * sin(radians(M)) + (0.019993 - 0.000101 * n) * sin(2 * radians(M));
    float L = L0 + C;
    float obliquity = 23.439 - 0.0000004 * n;

    // Вычисление деклинации Солнца
    float declination = degrees(asin(sin(radians(obliquity)) * sin(radians(L))));

    // Время в UT
    float time = hour + minute / 60.0;
    float solarTime = time + (4 * (longitude - 15 * 0)) / 60.0;

    // Вычисление угла высоты
    float hourAngle = 15 * (solarTime - 12);
    float altitude = degrees(asin(sin(radians(latitude)) * sin(radians(declination)) + cos(radians(latitude)) * cos(radians(declination)) * cos(radians(hourAngle))));

    return altitude;
}

float calculateSolarDeclination(int year, int month, int day, int hour, int minute) {
    float jd = 367 * year - int((7 * (year + int((month + 9) / 12))) / 4) + int((275 * month) / 9) + day + 1721013.5;
    float dayFraction = (hour + minute / 60.0) / 24.0;
    jd += dayFraction;

    float n = jd - 2451545.0; // Количество дней с 2000-01-01
    float L0 = 280.460 + 0.9856474 * n; // Долгота Солнца в эклиптической долготы
    float M = 357.528 + 0.9856003 * n; // Среднее аномальное положение
    float e = 0.01671; // Экцентриситет орбиты Земли

    // Угловое положение Солнца
    float C = (1.9148 - 0.004817 * n - 0.000014 * n * n) * sin(radians(M)) + (0.019993 - 0.000101 * n) * sin(2 * radians(M));
    float L = L0 + C;
    float obliquity = 23.439 - 0.0000004 * n;

    // Вычисление деклинации Солнца
    float declination = degrees(asin(sin(radians(obliquity)) * sin(radians(L))));

    return declination;
}


float calculateSolarRightAscension(int year, int month, int day, int hour, int minute) {
    float jd = 367 * year - int((7 * (year + int((month + 9) / 12))) / 4) + int((275 * month) / 9) + day + 1721013.5;
    float dayFraction = (hour + minute / 60.0) / 24.0;
    jd += dayFraction;

    float n = jd - 2451545.0; // Количество дней с 2000-01-01
    float L0 = 280.460 + 0.9856474 * n; // Долгота Солнца в эклиптической долготы
    float M = 357.528 + 0.9856003 * n; // Среднее аномальное положение
    float e = 0.01671; // Экцентриситет орбиты Земли

    // Угловое положение Солнца
    float C = (1.9148 - 0.004817 * n - 0.000014 * n * n) * sin(radians(M)) + (0.019993 - 0.000101 * n) * sin(2 * radians(M));
    float L = L0 + C;
    float obliquity = 23.439 - 0.0000004 * n;

    // Вычисление прямого восхождения Солнца
    float RA = degrees(atan2(cos(radians(obliquity)) * sin(radians(L)), cos(radians(L))));

    return RA;
}

#endif
