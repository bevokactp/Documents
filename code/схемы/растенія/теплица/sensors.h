#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>

// Объявление функций для работы с сенсорами
void initSensors();
float readAirTemperature();
float readWaterTemperature();
int readSoilMoisture();
float readAirHumidity();
bool detectSmoke();

#endif
