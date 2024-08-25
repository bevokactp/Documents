#include <LiquidCrystal.h> // Подключение библиотеки для работы с LCD (если используется)

// Определение пинов для pH-датчика и датчика влажности почвы
const int pHSensorPin = A0;
const int soilMoistureSensorPin = A1;

// Создание объекта для работы с LCD (если используете дисплей)
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  Serial.begin(9600); // Инициализация серийного порта для вывода данных
  lcd.begin(16, 2);   // Инициализация LCD, 16 символов, 2 строки
}

void loop() {
  // Считывание значений с датчиков
  int pHValue = analogRead(pHSensorPin);
  int soilMoistureValue = analogRead(soilMoistureSensorPin);

  // Преобразование значений в напряжение (0-5V)
  float pHVoltage = pHValue * (5.0 / 1023.0);
  float soilMoistureVoltage = soilMoistureValue * (5.0 / 1023.0);

  // Преобразование напряжений в pH и уровень влажности (требуется калибровка)
  float pH = 7.0 + (2.5 - pHVoltage); // Упрощенная формула для pH; настройте в соответствии с вашим датчиком
  float soilMoisturePercentage = (soilMoistureVoltage / 5.0) * 100; // Преобразование в процент влажности

  // Вывод результатов на серийный порт
  Serial.print("pH: ");
  Serial.print(pH);
  Serial.print(" | Soil Moisture: ");
  Serial.print(soilMoisturePercentage);
  Serial.println("%");

  // Вывод данных на LCD (если используется)
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("pH: ");
  lcd.print(pH);
  lcd.setCursor(0, 1);
  lcd.print("Moisture: ");
  lcd.print(soilMoisturePercentage);
  lcd.print("%");

  // Задержка между измерениями
  delay(2000); // Пауза в 2 секунды
}
