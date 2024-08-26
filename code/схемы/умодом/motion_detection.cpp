#include "motion_detection.h"
#include <Arduino.h>

// Настройки для датчика движения
const int motionPin = 2; // Пин, к которому подключен выход датчика движения
bool motionDetected = false; // Флаг для хранения состояния обнаружения движения

void initMotionDetection() {
    pinMode(motionPin, INPUT); // Установка пина для датчика движения в режим входа
    Serial.begin(9600); // Инициализация последовательного порта для вывода данных
}

void handleMotionDetection() {
    // Чтение состояния датчика движения
    int sensorValue = digitalRead(motionPin);

    if (sensorValue == HIGH) { // Движение обнаружено
        if (!motionDetected) {
            motionDetected = true;
            Serial.println("Motion detected!");
            // Вы можете добавить сюда код для выполнения действий при обнаружении движения
            // Например, включение освещения или отправка уведомления
        }
    } else { // Движение не обнаружено
        if (motionDetected) {
            motionDetected = false;
            Serial.println("No motion detected.");
            // Вы можете добавить сюда код для выполнения действий при отсутствии движения
            // Например, выключение освещения или запись события
        }
    }
}
