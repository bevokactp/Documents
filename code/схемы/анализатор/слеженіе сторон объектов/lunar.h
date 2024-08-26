#ifndef LUNAR_H
#define LUNAR_H

#include <math.h>

float calculateLunarLongitude(int year, int month, int day, int hour, int minute) {
    // Упрощённое вычисление эклиптической долготы Луны
    float T = (year - 2000) / 100.0;
    float J2000 = 2451545.0 + (hour + minute / 60.0) / 24.0;
    float M = 357.5291 + 0.98560028 * (J2000 - 2451545);
    float M_rad = radians(M);
    float L0 = 280.46646 + 0.9856474 * (J2000 - 2451545);
    float L0_rad = radians(L0);
    float e = 0.016708634 - 0.000042037 * T;
    float C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sin(M_rad) +
              (0.019993 - 0.000101 * T) * sin(2 * M_rad);
    float theta = L0 + C;
    float theta_rad = radians(theta);

    // Угловая позиция Луны (приближённый метод)
    float lambda = theta + (6.29 * sin(radians(134.9 + 477198.0 / (J2000 - 2451545))));
    return lambda;
}

// Функция для вычисления эклиптической широты Луны
float calculateLunarLatitude(int year, int month, int day, int hour, int minute) {
    // Упрощенное вычисление эклиптической широты Луны
    float T = (year - 2000) / 100.0;
    float J2000 = 2451545.0 + (hour + minute / 60.0) / 24.0;
    float M = 357.5291 + 0.98560028 * (J2000 - 2451545);
    float M_rad = radians(M);
    float L0 = 280.46646 + 0.9856474 * (J2000 - 2451545);
    float L0_rad = radians(L0);
    float e = 0.016708634 - 0.000042037 * T;
    float C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sin(M_rad) +
              (0.019993 - 0.000101 * T) * sin(2 * M_rad);
    float theta = L0 + C;
    float theta_rad = radians(theta);

    // Угловая позиция Луны (приближённый метод)
    float lambda = theta + (6.29 * sin(radians(134.9 + 477198.0 / (J2000 - 2451545))));
    float beta = 5.13 * sin(radians(93.3 + 483202.0 / (J2000 - 2451545))); // Упрощенное приближение для эклиптической широты

    return beta;
}

#endif
