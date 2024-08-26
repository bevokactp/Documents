#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Пины подключения фотосенсора
const int sensorPin = A0;

// LCD дисплей
LiquidCrystal_I2C lcd(0x27, 16, 2); // Адрес и размер дисплея

void setup() {
  // Инициализация дисплея
  lcd.begin();
  lcd.backlight();

  // Настройка пина фотосенсора
  pinMode(sensorPin, INPUT);

  // Сообщение о запуске
  lcd.setCursor(0, 0);
  lcd.print("Digital Protractor");
  delay(2000); // Пауза 2 секунды
}

void loop() {
  // Чтение значения с фотосенсора
  int sensorValue = analogRead(sensorPin);

  // Перевод значения в угол (грубо; для более точных измерений требуется калибровка)
  float angle = map(sensorValue, 0, 1023, 0, 90);

  // Отображение угла на дисплее
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Angle:");
  lcd.setCursor(0, 1);
  lcd.print(angle);
  lcd.print(" degrees");

  // Пауза перед следующим измерением
  delay(500);
}
