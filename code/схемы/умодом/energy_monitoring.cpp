#include "energy_monitoring.h"
#include <Arduino.h>

// Настройки для датчика тока
const int analogPin = A0; // Пин, к которому подключен выход датчика тока
const float voltageRef = 5.0; // Напряжение питания Arduino (вольт)
const float adcMax = 1023.0; // Максимальное значение ADC
const float currentOffset = 2.5; // Смещение по напряжению (2.5V при отсутствии тока)
const float sensitivity = 0.185; // Чувствительность датчика ACS712 (в Вольтах на ампер)

// Переменные для хранения показаний
float currentAmps = 0.0;
float powerWatts = 0.0;

void initEnergyMonitoring() {
    pinMode(analogPin, INPUT);
    Serial.begin(9600); // Инициализация последовательного порта для вывода данных
}

void handleEnergyMonitoring() {
    int sensorValue = analogRead(analogPin); // Чтение значения с датчика тока
    float voltage = sensorValue * (voltageRef / adcMax); // Преобразование значения в напряжение
    float current = (voltage - currentOffset) / sensitivity; // Вычисление тока в амперах

    currentAmps = current; // Сохранение показания тока
    powerWatts = currentAmps * 230; // Вычисление потребляемой мощности (например, при напряжении 230V)

    // Вывод данных на последовательный порт
    Serial.print("Current (A): ");
    Serial.print(currentAmps);
    Serial.print(" Power (W): ");
    Serial.println(powerWatts);
}
