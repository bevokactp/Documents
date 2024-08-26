// Определяем номера пинов для светодиодов
const int ledPins[] = {2, 3, 4, 5, 6};
const int numLeds = 5; // Количество светодиодов
const int delayTime = 200; // Задержка между переключениями в миллисекундах

void setup() {
  // Настраиваем пины как выходные
  for (int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Переключаем светодиоды в прямом направлении
  for (int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH); // Включаем светодиод
    delay(delayTime);               // Задержка
    digitalWrite(ledPins[i], LOW);  // Выключаем светодиод
  }

  // Переключаем светодиоды в обратном направлении
  for (int i = numLeds - 1; i >= 0; i--) {
    digitalWrite(ledPins[i], HIGH); // Включаем светодиод
    delay(delayTime);               // Задержка
    digitalWrite(ledPins[i], LOW);  // Выключаем светодиод
  }
}
