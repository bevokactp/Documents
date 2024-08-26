#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Инициализация дисплея
LiquidCrystal_I2C lcd(0x27, 16, 2); // Адрес дисплея может быть другим

// Пины для сенсоров
#define LDR_PIN A0 // Или A1, если используете усилитель

void setup() {
  lcd.begin();
  lcd.backlight();
  Serial.begin(9600);
}

void loop() {
  int ldrValue = analogRead(LDR_PIN);
  float distance = calculateDistance(ldrValue);

  // Вывод данных на дисплей
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Distance: ");
  lcd.print(distance);
  lcd.print(" cm");

  Serial.print("LDR Value: ");
  Serial.println(ldrValue);
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(1000); // Обновление каждые 1 секунду
}

// Функция для расчета расстояния (в см) из значения LDR
float calculateDistance(int ldrValue) {
  // Примерная функция расчета расстояния, требующая калибровки
  // Значение ldrValue нужно калибровать в зависимости от вашей схемы
  float distance = 1000.0 / (ldrValue + 1); // Примерная формула
  return distance;
}
