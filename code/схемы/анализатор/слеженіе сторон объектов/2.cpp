#include <ESP8266WiFi.h>
#include <Wire.h>
#include <LiquidCrystal.h>
#include <ArduinoJson.h>  // Для обработки JSON данных

// Настройка для Wi-Fi
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";
const char* server = "api.weatherapi.com";
const char* apiKey = "YOUR_API_KEY";

// Настройка LCD
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Создание экземпляра Wi-Fi клиента
WiFiClient client;

void setup() {
  Serial.begin(115200);
  lcd.begin(16, 2);

  // Подключение к Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected!");

  // Запрос данных с API
  String url = "/v1/astronomy.json?key=" + String(apiKey) + "&q=YOUR_LOCATION";
  if (client.connect(server, 80)) {
    client.print(String("GET ") + url + " HTTP/1.1\r\n" +
                 "Host: " + server + "\r\n" +
                 "Connection: close\r\n\r\n");
  }
}

void loop() {
  if (client.available()) {
    String line = client.readStringUntil('\n');
    if (line == "\r") {
      String response = client.readStringUntil('\n');
      StaticJsonDocument<1024> doc;
      deserializeJson(doc, response);

      // Извлечение данных о Луне
      const char* moonrise = doc["astronomy"]["astro"]["moonrise"];
      const char* moonset = doc["astronomy"]["astro"]["moonset"];
      const char* moon_phase = doc["astronomy"]["astro"]["moon_phase"];

      // Вывод данных на LCD
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Moonrise: ");
      lcd.print(moonrise);
      lcd.setCursor(0, 1);
      lcd.print("Moon Phase: ");
      lcd.print(moon_phase);
    }
  }
  delay(10000); // Обновление каждые 10 секунд
}
