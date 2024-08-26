#include "sensors.h"
#include <DHT.h> // Библиотека для работы с DHT сенсорами

#define DHTPIN 2
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// Объявление пинов сенсоров
const int airTempPin = A0;
const int waterTempPin = A1;
const int soilMoisturePin = A2;
const int smokeSensorPin = A3;

void initSensors() {
  dht.begin();
  pinMode(airTempPin, INPUT);
  pinMode(waterTempPin, INPUT);
  pinMode(soilMoisturePin, INPUT);
  pinMode(smokeSensorPin, INPUT);
}

float readAirTemperature() {
  int sensorValue = analogRead(airTempPin);
  float voltage = sensorValue * (5.0 / 1023.0);
  float temperature = (voltage - 0.5) * 100; // Преобразование в °C
  return temperature;
}

float readWaterTemperature() {
  int sensorValue = analogRead(waterTempPin);
  float voltage = sensorValue * (5.0 / 1023.0);
  float temperature = (voltage - 0.5) * 100; // Преобразование в °C
  return temperature;
}

int readSoilMoisture() {
  return analogRead(soilMoisturePin);
}

float readAirHumidity() {
  return dht.readHumidity();
}

bool detectSmoke() {
  return analogRead(smokeSensorPin) > SMOKE_DETECTION_THRESHOLD;
}
