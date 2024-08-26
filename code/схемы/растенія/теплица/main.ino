#include <Wire.h>
#include <SPI.h>
#include "sensors.h"
#include "actuators.h"
#include "config.h"

void setup() {
  Serial.begin(9600);
  initSensors();
  initActuators();
}

void loop() {
  float airTemp = readAirTemperature();
  float waterTemp = readWaterTemperature();
  int soilMoisture = readSoilMoisture();
  float airHumidity = readAirHumidity();
  bool smokeDetected = detectSmoke();

  Serial.print("Air Temp: "); Serial.print(airTemp); Serial.println(" °C");
  Serial.print("Water Temp: "); Serial.print(waterTemp); Serial.println(" °C");
  Serial.print("Soil Moisture: "); Serial.println(soilMoisture);
  Serial.print("Air Humidity: "); Serial.print(airHumidity); Serial.println(" %");
  Serial.print("Smoke Detected: "); Serial.println(smokeDetected ? "Yes" : "No");

  // Автоматическое регулирование
  if (airTemp > TEMP_AIR_THRESHOLD_HIGH) {
    controlHeater(false);
    controlVentilation(true);
  } else if (airTemp < TEMP_AIR_THRESHOLD_LOW) {
    controlHeater(true);
    controlVentilation(false);
  } else {
    controlHeater(false);
    controlVentilation(false);
  }

  if (waterTemp > TEMP_WATER_THRESHOLD_HIGH) {
    // Можно добавить логику для охладителя воды, если это необходимо
  } else if (waterTemp < TEMP_WATER_THRESHOLD_LOW) {
    // Можно добавить логику для подогрева воды, если это необходимо
  }

  if (soilMoisture < SOIL_MOISTURE_THRESHOLD) {
    controlWaterValve(true);  // Открыть клапан для полива
    controlWaterPump(true);   // Включить насос для подачи воды
  } else {
    controlWaterValve(false); // Закрыть клапан
    controlWaterPump(false);  // Выключить насос
  }

  if (airHumidity > AIR_HUMIDITY_THRESHOLD_HIGH) {
    controlLights(false); // Меньше света при высокой влажности
  } else if (airHumidity < AIR_HUMIDITY_THRESHOLD_LOW) {
    controlLights(true);  // Больше света при низкой влажности
  }

  if (smokeDetected) {
    // Включить оповещение о дыме или другие меры
  }

  delay(1000); // Периодичность обновления данных
}
