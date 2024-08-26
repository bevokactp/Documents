#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Инициализация дисплея (укажите адрес и размер дисплея)
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Пины для переключателя и кнопок
const int voltagePin = A0;
const int currentPin = A1;
const int resistancePin = A2;
const int modeSwitchPin = 2;
const int buttonPin = 3;

int mode = 0;

void setup() {
  lcd.begin();
  lcd.backlight();
  pinMode(modeSwitchPin, INPUT);
  pinMode(buttonPin, INPUT);
  lcd.print("Multimeter");
  delay(2000);
}

void loop() {
  if (digitalRead(modeSwitchPin) == HIGH) {
    mode = (mode + 1) % 3; // Переключение между режимами
    delay(500); // Дебаунсинг
  }

  float value = 0;

  switch (mode) {
    case 0: // Вольтметр
      value = analogRead(voltagePin) * (5.0 / 1023.0); // 5.0 В и 10-битное АЦП
      lcd.clear();
      lcd.print("Voltage: ");
      lcd.print(value);
      lcd.print(" V");
      break;

    case 1: // Амперметр
      value = (analogRead(currentPin) - 512) * (5.0 / 1023.0) / 0.185; // Примерный расчет
      lcd.clear();
      lcd.print("Current: ");
      lcd.print(value);
      lcd.print(" A");
      break;

    case 2: // Омметр
      float resistance = 10000.0 * (1023.0 / analogRead(resistancePin) - 1); // Примерный расчет
      lcd.clear();
      lcd.print("Resistance: ");
      lcd.print(resistance);
      lcd.print(" Ohm");
      break;
  }

  delay(500); // Обновление экрана каждые полсекунды
}
