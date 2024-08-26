#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// Инициализация дисплея
LiquidCrystal_I2C lcd(0x27, 16, 2); // Адрес может быть другим, проверьте документацию дисплея

// Пины для датчиков
#define PH_PIN A0
#define TDS_PIN A1
#define CONDUCTIVITY_PIN A2
#define TEMP_PIN 2

// Инициализация шины 1-Wire и датчика температуры
OneWire oneWire(TEMP_PIN);
DallasTemperature sensors(&oneWire);

void setup() {
  lcd.begin();
  lcd.backlight();
  sensors.begin();
  Serial.begin(9600);
}

void loop() {
  // Чтение температуры
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);

  // Чтение pH
  int pHValue = analogRead(PH_PIN);
  float pH = map(pHValue, 0, 1023, 0, 14); // Калибровка будет необходима

  // Чтение TDS
  int tdsValue = analogRead(TDS_PIN);
  float tds = map(tdsValue, 0, 1023, 0, 1000); // Калибровка будет необходима

  // Чтение проводимости
  int conductivityValue = analogRead(CONDUCTIVITY_PIN);
  float conductivity = map(conductivityValue, 0, 1023, 0, 1000); // Калибровка будет необходима

  // Вывод данных на дисплей
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("pH: ");
  lcd.print(pH, 2);
  lcd.setCursor(0, 1);
  lcd.print("TDS: ");
  lcd.print(tds);
  lcd.setCursor(8, 1);

