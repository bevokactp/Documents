#include <LiquidCrystal.h> // библиотека для LCD-дисплея

  LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

  int pHSensorPin = A0; // аналоговый пин для pH сенсора
  int tempSensorPin = A2; // аналоговый пин для температурного сенсора

  void setup() {
    lcd.begin(16, 2);
    lcd.print("Water Quality");
  }

  void loop() {
    int pHValue = analogRead(pHSensorPin);
    int tempValue = analogRead(tempSensorPin);

    lcd.setCursor(0, 1);
    lcd.print("pH: ");
    lcd.print(pHValue);
    lcd.print(" TDS: ");
    lcd.print(TDSValue);
    lcd.print(" Temp: ");
    lcd.print(tempValue);

    delay(1000); // обновление каждую секунду
  }
