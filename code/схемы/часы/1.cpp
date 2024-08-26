#include <Wire.h>
#include <RTClib.h>
#include <LiquidCrystal_I2C.h>

// Создание объекта для работы с RTC
RTC_DS3231 rtc;

// Создание объекта для LCD дисплея
LiquidCrystal_I2C lcd(0x27, 16, 2); // Адрес 0x27 может отличаться

void setup() {
  Serial.begin(9600);

  // Инициализация дисплея
  lcd.begin();
  lcd.backlight(); // Включаем подсветку

  // Инициализация RTC
  if (!rtc.begin()) {
    lcd.print("RTC не найден!");
    while (1);
  }

  // Проверка сбоя часов
  if (rtc.lostPower()) {
    lcd.print("Сброс времени");
    // Установите текущее время здесь:
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }
}

void loop() {
  DateTime now = rtc.now();

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Время:");
  lcd.setCursor(0, 1);

  // Отображение времени
  lcd.print(now.hour(), DEC);
  lcd.print(':');
  lcd.print(now.minute(), DEC);
  lcd.print(':');
  lcd.print(now.second(), DEC);

  delay(1000); // Обновляем каждую секунду
}
