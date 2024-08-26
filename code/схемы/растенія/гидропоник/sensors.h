#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>

// Объявление функций для работы с сенсорами
void initSensors();
float readWaterTemperature();
float readPH();
float readEC();
float readAirHumidity();
float readAirTemperature();

#endif
