#ifndef ACTUATORS_H
#define ACTUATORS_H

#include <Arduino.h>

// Объявление функций для управления исполнительными механизмами
void initActuators();
void controlWaterPump(bool state);
void controlHeater(bool state);
void controlLights(bool state);
void controlVentilation(bool state);

#endif
