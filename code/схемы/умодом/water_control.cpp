#include "water_control.h"
#include <Arduino.h>

// Настройки для управления водоснабжением
const int waterValvePin = 3; // Пин для подключения реле управления клапаном водоснабжения
bool waterValveState = false; // Текущее состояние клапана

void initWaterControl() {
    pinMode(waterValvePin, OUTPUT); // Установка пина реле в режим выхода
    digitalWrite(waterValvePin, LOW); // Установка начального состояния: клапан закрыт
    Serial.begin(9600); // Инициализация последовательного порта для вывода данных
    Serial.println("Water control initialized.");
}

void handleWaterControl() {
    // Пример логики управления водоснабжением:
    // Здесь вы можете добавить условия для управления клапаном водоснабжения

    if (/* условие для открытия клапана */) {
        if (!waterValveState) {
            digitalWrite(waterValvePin, HIGH); // Открытие клапана
            waterValveState = true;
            Serial.println("Water valve OPEN");
        }
    } else {
        if (waterValveState) {
            digitalWrite(waterValvePin, LOW); // Закрытие клапана
            waterValveState = false;
            Serial.println("Water valve CLOSED");
        }
    }
}
