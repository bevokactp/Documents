#include "remote_control.h"
#include <Arduino.h>
#include <SoftwareSerial.h>

// Настройки для Bluetooth
const int rxPin = 10; // Пин RX для подключения HC-05
const int txPin = 11; // Пин TX для подключения HC-05
SoftwareSerial btSerial(rxPin, txPin); // Создание экземпляра для связи по Bluetooth

void initRemoteControl() {
    btSerial.begin(9600); // Инициализация связи с HC-05
    Serial.begin(9600);  // Инициализация последовательного порта для вывода данных
    Serial.println("Bluetooth initialized.");
}

void handleRemoteControl() {
    // Проверка наличия входящих данных
    if (btSerial.available()) {
        char command = btSerial.read(); // Чтение команды из Bluetooth

        // Логика обработки команд
        switch (command) {
            case 'L': // Команда для включения освещения
                Serial.println("Command: Light ON");
                // Здесь добавьте код для включения освещения
                break;
            case 'l': // Команда для выключения освещения
                Serial.println("Command: Light OFF");
                // Здесь добавьте код для выключения освещения
                break;
            case 'T': // Команда для получения температуры
                Serial.println("Command: Get Temperature");
                // Здесь добавьте код для получения температуры
                break;
            case 'W': // Команда для включения водоснабжения
                Serial.println("Command: Water ON");
                // Здесь добавьте код для включения водоснабжения
                break;
            case 'w': // Команда для выключения водоснабжения
                Serial.println("Command: Water OFF");
                // Здесь добавьте код для выключения водоснабжения
                break;
            // Добавьте дополнительные команды по необходимости
            default:
                Serial.println("Unknown command.");
                break;
        }
    }
}
