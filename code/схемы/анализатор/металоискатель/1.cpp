const int sensorPin = A0; // Пин для катушки
const int ledPin = 13;    // Пин для светодиода

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600); // Для отладки
}

void loop() {
  int sensorValue = analogRead(sensorPin); // Чтение значения с катушки

  if (sensorValue > threshold) { // Условие для обнаружения металла
    digitalWrite(ledPin, HIGH); // Включение индикатора
    Serial.println("Металл найден!"); // Отладка
  } else {
    digitalWrite(ledPin, LOW); // Выключение индикатора
  }

  delay(100); // Задержка для стабильности
}
