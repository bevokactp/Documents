#include "notifications.h"
#include <Arduino.h>

// Настройки для системы уведомлений
const int buzzerPin = 9; // Пин для подключения буззера
const int ledPin = 10;   // Пин для подключения светодиода
const unsigned long beepDuration = 1000; // Длительность звукового сигнала в миллисекундах

// Переменные для управления уведомлениями
unsigned long lastBeepTime = 0; // Время последнего звукового сигнала
bool notificationState = false; // Состояние уведомления

void initNotifications() {
    pinMode(buzzerPin, OUTPUT); // Установка пина буззера в режим выхода
    pinMode(ledPin, OUTPUT);    // Установка пина светодиода в режим выхода
    digitalWrite(buzzerPin, LOW); // Начальное состояние: выключено
    digitalWrite(ledPin, LOW);    // Начальное состояние: выключено
    Serial.begin(9600);          // Инициализация последовательного порта для вывода данных
}

void handleNotifications() {
    // Пример логики для управления уведомлениями
    // В данном примере уведомление активируется каждые 10 секунд

    unsigned long currentTime = millis(); // Текущее время
    if (currentTime - lastBeepTime >= beepDuration) {
        if (notificationState) {
            // Выключение уведомления
            digitalWrite(buzzerPin, LOW);
            digitalWrite(ledPin, LOW);
            notificationState = false;
            Serial.println("Notification OFF");
        } else {
            // Включение уведомления
            digitalWrite(buzzerPin, HIGH);
            digitalWrite(ledPin, HIGH);
            notificationState = true;
            Serial.println("Notification ON");
        }
        lastBeepTime = currentTime; // Обновление времени последнего уведомления
    }
}
