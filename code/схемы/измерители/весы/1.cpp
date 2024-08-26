#include <HX711.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Инициализация HX711
HX711 scale;
#define DOUT  3
#define CLK  2

// Инициализация LCD дисплея
LiquidCrystal_I2C lcd(0x27, 16, 2);  // Адрес 0x27 может отличаться

void setup() {
  Serial.begin(9600);
  lcd.begin();
  lcd.backlight();

  scale.begin(DOUT, CLK);
  scale.set_scale();    // Установите коэффициент масштабирования здесь
  scale.tare();         // Обнуление весов
}

void loop() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Вес: ");
  lcd.print(scale.get_units(), 1);  // Показать вес с одной цифрой после запятой
  lcd.print(" г");
  delay(500);
}
