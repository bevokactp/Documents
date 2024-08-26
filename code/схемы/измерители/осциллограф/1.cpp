#include <LiquidCrystal.h>

// Инициализация LCD
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int analogPin = A0; // Пин для входа сигнала
int sampleRate = 10; // Частота выборки (в миллисекундах)

void setup() {
	lcd.begin(16, 2);
	lcd.print("Oscilloscope");
}

void loop() {
	lcd.setCursor(0, 1);
	int sensorValue = analogRead(analogPin);
	lcd.print("Value: ");
	lcd.print(sensorValue);

	delay(sampleRate);
}
