#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Инициализация дисплея
LiquidCrystal_I2C lcd(0x27, 16, 2); // Адрес дисплея может быть другим

// Пины для сенсоров
#define LASER_PIN 8       // Пин для управления лазером (если требуется)
#define PHOTODIODE_PIN A0 // Пин для фотодетектора

void setup() {
  lcd.begin();
  lcd.backlight();
  pinMode(LASER_PIN, OUTPUT);
  digitalWrite(LASER_PIN, LOW); // Выключаем лазер по умолчанию
  Serial.begin(9600);
}

void loop() {
  // Включаем лазер
  digitalWrite(LASER_PIN, HIGH);
  delay(10); // Подождите немного, чтобы лазер стабилизировался

  // Измеряем время включения лазера
  unsigned long startTime = micros();
  int photodiodeValue = analogRead(PHOTODIODE_PIN);
  unsigned long endTime = micros();

  // Выключаем лазер
  digitalWrite(LASER_PIN, LOW);

  // Расчет времени в микросекундах
  unsigned long elapsedTime = endTime - startTime;

  // Расчет расстояния (в зависимости от используемой формулы и длины волны лазера)
  float distance = calculateDistance(elapsedTime);

  // Вывод данных на дисплей
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Distance: ");
  lcd.print(distance);
  lcd.print(" cm");

  Serial.print("Elapsed Time: ");
  Serial.print(elapsedTime);
  Serial.print(" µs");
  Serial.print(" Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(1000); // Обновление каждые 1 секунду
}

// Функция для расчета расстояния (в см) из времени
float calculateDistance(unsigned long elapsedTime) {
  // Примерная функция расчета расстояния, требующая калибровки
  // Примите во внимание скорость света и время возвращения лазерного луча
  float speedOfLight = 3.0e8; // Скорость света в м/с
  float distance = (elapsedTime * speedOfLight / 2.0) * 1.0e-6; // Учитываем возврат луча и преобразуем в см
  return distance;
}
