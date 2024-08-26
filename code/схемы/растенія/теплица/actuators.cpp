#include "actuators.h"

// Объявление пинов исполнительных механизмов
const int waterValvePin = 3;
const int waterPumpPin = 4;
const int heaterPin = 5;
const int lightsPin = 6;
const int ventilationPin = 7;

void initActuators() {
  pinMode(waterValvePin, OUTPUT);
  pinMode(waterPumpPin, OUTPUT);
  pinMode(heaterPin, OUTPUT);
  pinMode(lightsPin, OUTPUT);
  pinMode(ventilationPin, OUTPUT);
}

void controlWaterValve(bool state) {
  digitalWrite(waterValvePin, state ? HIGH : LOW);
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
