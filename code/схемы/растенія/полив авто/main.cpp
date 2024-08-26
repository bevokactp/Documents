#include <DHT.h>

#define DHTPIN 2 // Пин для подключения датчика DHT11
#define DHTTYPE DHT11 // Тип датчика DHT11

DHT dht(DHTPIN, DHTTYPE);

const int soilMoisturePin = A0; // Пин для аналогового датчика влажности
const int relayPin = 3; // Пин для реле клапана

int moistureThreshold = 400; // Порог влажности (настраиваемый)

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW); // Изначально клапан закрыт
}

void loop() {
  int soilMoistureValue = analogRead(soilMoisturePin);

  Serial.print("Soil Moisture: ");
  Serial.println(soilMoistureValue);

  if (soilMoistureValue < moistureThreshold) {
    digitalWrite(relayPin, HIGH); // Открыть клапан
    Serial.println("Watering...");
  } else {
    digitalWrite(relayPin, LOW); // Закрыть клапан
    Serial.println("Soil is moist.");
  }

  delay(60000); // Период проверки 1 минута
}
