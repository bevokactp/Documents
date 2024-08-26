// Простое управление через таймер
const int relayPin = 3; // Пин для реле клапана
unsigned long previousMillis = 0;
const long interval = 60000; // Интервал полива 1 минута (60000 мс)

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW); // Изначально клапан закрыт
}

void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    // Переключение состояния клапана
    if (digitalRead(relayPin) == LOW) {
      digitalWrite(relayPin, HIGH); // Включить клапан
      Serial.println("Watering...");
    } else {
      digitalWrite(relayPin, LOW); // Выключить клапан
      Serial.println("Stopped watering.");
    }
  }
}
