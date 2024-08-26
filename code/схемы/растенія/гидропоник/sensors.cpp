#include "sensors.h"
#include <DHT.h> // Библиотека для работы с DHT сенсорами

#define DHTPIN 2
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// Объявление пинов сенсоров
const int waterTempPin = A0;
const int phPin = A1; // pH сенсор (возможно потребуется специальная библиотека)
const int ecPin = A2; // EC сенсор (возможно потребуется специальная библиотека)

void initSensors() {
  dht.begin();
  pinMode(waterTempPin, INPUT);
  pinMode(phPin, INPUT);
  pinMode(ecPin, INPUT);
}

float readWaterTemperature() {
  int sensorValue = analogRead(waterTempPin);
  float voltage = sensorValue * (5.0 / 1023.0);
  float temperature = (voltage - 0.5) * 100; // Преобразование в °C
  return temperature;
}

float readPH() {
  int sensorValue = analogRead(phPin);
  // Преобразование аналогового значения в pH (потребуется калибровка)
  float voltage = sensorValue * (5.0 / 1023.0);
  float pH = 7 + (2.5 - voltage) * 3.5; // Пример преобразования (может отличаться)
  return pH;
}

float readEC() {
  int sensorValue = analogRead(ecPin);
  // Преобразование аналогового значения в EC (потребуется калибровка)
  float voltage = sensorValue * (5.0 / 1023.0);
  float EC = voltage * 1000; // Пример преобразования (может отличаться)
  return EC;
}

float readAirHumidity() {
  return dht.readHumidity();
}

float readAirTemperature() {
  return dht.readTemperature();
}
