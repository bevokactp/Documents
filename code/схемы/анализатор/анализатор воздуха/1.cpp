#include <DHT.h>
#include <SoftwareSerial.h>

// Параметры для DHT22
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// Параметры для MH-Z19
SoftwareSerial co2Serial(2, 3); // RX, TX

void setup() {
  Serial.begin(9600);
  dht.begin();
  co2Serial.begin(9600);
}

void loop() {
  // Чтение с DHT22
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // Чтение с MH-Z19
  co2Serial.write(0xFF); // Пример команды, для получения данных используйте соответствующую команду из документации MH-Z19
  co2Serial.write(0x01);
  co2Serial.write(0x86);
  co2Serial.write(0x00);
  co2Serial.write(0x00);
  co2Serial.write(0x00);
  co2Serial.write(0x00);
  co2Serial.write(0x00);

  // Подождите некоторое время
  delay(500);

  // Отображение результатов
  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.println(" *C");

  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.println(" %");

  // Получите и выведите данные CO2
  while (co2Serial.available()) {
    char c = co2Serial.read();
    Serial.print(c);
  }

  delay(2000); // Задержка между измерениями
}
