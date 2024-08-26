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
  float waterTemp = readWaterTemperature();
  float pH = readPH();
  float EC = readEC();
  float airHumidity = readAirHumidity();
  float airTemp = readAirTemperature();

  Serial.print("Water Temp: "); Serial.print(waterTemp); Serial.println(" °C");
  Serial.print("pH: "); Serial.println(pH);
  Serial.print("EC: "); Serial.println(EC);
  Serial.print("Air Humidity: "); Serial.print(airHumidity); Serial.println(" %");
  Serial.print("Air Temp: "); Serial.print(airTemp); Serial.println(" °C");

  // Автоматическое регулирование
  if (waterTemp > TEMP_WATER_THRESHOLD_HIGH) {
    controlHeater(false);
  } else if (waterTemp < TEMP_WATER_THRESHOLD_LOW) {
    controlHeater(true);
  } else {
    controlHeater(false);
  }

  if (pH > PH_THRESHOLD_HIGH || pH < PH_THRESHOLD_LOW) {
    // Можно добавить логику для регулировки pH
  }

  if (EC > EC_THRESHOLD_HIGH || EC < EC_THRESHOLD_LOW) {
    // Можно добавить логику для регулировки концентрации питательных веществ
  }

  // Управление поливом
  controlWaterPump(true); // Например, включить насос постоянно или по условию

  if (airHumidity > AIR_HUMIDITY_THRESHOLD_HIGH) {
    controlLights(false); // Уменьшить освещение при высокой влажности
  } else if (airHumidity < AIR_HUMIDITY_THRESHOLD_LOW) {
    controlLights(true);  // Увеличить освещение при низкой влажности
  }

  if (airTemp > TEMP_AIR_THRESHOLD_HIGH) {
    controlVentilation(true);
  } else if (airTemp < TEMP_AIR_THRESHOLD_LOW) {
    controlVentilation(false);
  } else {
    controlVentilation(false);
  }

  delay(1000); // Периодичность обновления данных
}
