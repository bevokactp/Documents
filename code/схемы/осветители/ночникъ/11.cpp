#include <FastLED.h>

// Настройка пинов и параметров
#define LED_PIN     6
#define LED_COUNT   60  // Количество светодиодов в ленте

CRGB leds[LED_COUNT];

void setup() {
  FastLED.addLeds<NEOPIXEL, LED_PIN>(leds, LED_COUNT);
  FastLED.setBrightness(255);  // Установите яркость от 0 до 255
}

void loop() {
  // Пример градиента: плавный переход от одного цвета к другому
  for (int i = 0; i < 256; i++) {
    // Переход от красного к синему
    for (int j = 0; j < LED_COUNT; j++) {
      leds[j] = CHSV(i, 255, 255);
    }
    FastLED.show();
    delay(20);  // Время смены цвета
  }
}
