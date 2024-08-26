#include "temperature.h"
#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// Настройки для датчика температуры DS18B20
const int oneWirePin = 2; // Пин, к которому подключен датчик DS18B20

// Создание объектов для работы с датчиком
OneWire oneWire(oneWirePin); // Объект для работы с 1-Wire
DallasTemperature sensors(&oneWire); // Объект для работы с датчиками температуры

void initTemperature() {
    sensors.begin(); // Инициализация датчиков температуры
    Serial.begin(9600); // Инициализация последовательного порта для вывода данных
    Serial.println("Temperature sensor initialized.");
}

void handleTemperature() {
    sensors.requestTemperatures(); // Запрос температуры от датчиков
    float temperature = sensors.getTempCByIndex(0); // Получение температуры первого датчика

    // Вывод температуры на последовательный порт
    Serial.print("Current temperature: ");
    Serial.print(temperature);
    Serial.println(" C");

    // Пример логики контроля температуры
    // Вы можете добавить сюда код для управления устройствами в зависимости от температуры
    if (temperature > 25.0) {
        Serial.println("Temperature is too high! Taking action...");
        // Здесь добавьте код для выполнения действий, если температура слишком высокая
    } else if (temperature < 18.0) {
        Serial.println("Temperature is too low! Taking action...");
        // Здесь добавьте код для выполнения действий, если температура слишком низкая
    }
}
