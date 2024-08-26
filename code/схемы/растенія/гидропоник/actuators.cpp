#include "actuators.h"

// Объявление пинов исполнительных механизмов
const int waterPumpPin = 3;
const int heaterPin = 4;
const int lightsPin = 5;
const int ventilationPin = 6;

void initActuators() {
  pinMode(waterPumpPin, OUTPUT);
  pinMode(heaterPin, OUTPUT);
  pinMode(lightsPin, OUTPUT);
  pinMode(ventilationPin, OUTPUT);
}

void controlWaterPump(bool state) {
  digitalWrite(waterPumpPin, state ? HIGH : LOW);
}

void controlHeater(bool state) {
  digitalWrite(heaterPin, state ? HIGH : LOW);
}

void controlLights(bool state) {
  digitalWrite(lightsPin, state ? HIGH : LOW);
}

void controlVentilation(bool state) {
  digitalWrite(ventilationPin, state ? HIGH : LOW);
}
