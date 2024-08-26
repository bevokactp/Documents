#include "lighting.h"
#include <Arduino.h>

// Настройки для управления освещением
const int lightPin = 8; // Пин, к которому подключен управляющий сигнал реле
bool lightState = false; // Текущее состояние освещения

void initLighting() {
    pinMode(lightPin, OUTPUT); // Установка пина в режим выхода
    digitalWrite(lightPin, LOW); // Начальное состояние: выключено
}

void handleLighting() {
    // Пример логики управления освещением:
    // Включаем освещение, если оно выключено, и наоборот

    // Здесь вы можете добавить логику для изменения состояния освещения
    // Например, по команде с удаленного управления или по датчику

    if (/* условие для включения освещения */) {
        if (!lightState) {
            digitalWrite(lightPin, HIGH); // Включение реле, включающее свет
            lightState = true;
            Serial.println("Light ON");
        }
    } else {
        if (lightState) {
            digitalWrite(lightPin, LOW); // Выключение реле, выключающее свет
            lightState = false;
            Serial.println("Light OFF");
        }
    }
}
