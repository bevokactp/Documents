// Определение пинов
const int ledPin = 9;      // Пин, к которому подключен светодиод
const int ldrPin = A0;     // Пин, к которому подключен фоторезистор
int threshold = 500;       // Пороговое значение для включения светодиода

void setup() {
  // Настройка пина светодиода как выходного
  pinMode(ledPin, OUTPUT);

  // Инициализация последовательного соединения для отладки
  Serial.begin(9600);
}

void loop() {
  // Считываем значение с фоторезистора
  int ldrValue = analogRead(ldrPin);

  // Выводим значение для отладки
  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  // Если значение меньше порога, включаем светодиод
  if (ldrValue < threshold) {
    digitalWrite(ledPin, HIGH);  // Включаем светодиод
  } else {
    digitalWrite(ledPin, LOW);   // Выключаем светодиод
  }

  // Задержка для стабилизации
  delay(100);
}
