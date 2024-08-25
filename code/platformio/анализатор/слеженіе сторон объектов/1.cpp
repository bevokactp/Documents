#include <Wire.h>
#include <RTClib.h>
#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal.h>

// Настройка модулей
RTC_DS3231 rtc;
TinyGPSPlus gps;
SoftwareSerial gpsSerial(4, 3); // RX, TX для GPS
LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // LCD дисплей

// Функция для вычисления угла высоты Солнца
float calculateSolarAltitude(float latitude, float longitude, int year, int month, int day, int hour, int minute) {
    // Определение времени в UT (Universal Time)
    float jd = 367 * year - int((7 * (year + int((month + 9) / 12))) / 4) + int((275 * month) / 9) + day + 1721013.5;
    float dayFraction = (hour + minute / 60.0) / 24.0;
    jd += dayFraction;

    // Параметры для вычисления солнечной деклинации
    float n = jd - 2451545.0; // Количество дней с 2000-01-01
    float L0 = 280.460 + 0.9856474 * n; // Долгота Солнца в эклиптической долготы
    float M = 357.528 + 0.9856003 * n; // Среднее аномальное положение
    float e = 0.01671; // Экцентриситет орбиты Земли

    // Угловое положение Солнца
    float C = (1.9148 - 0.004817 * n - 0.000014 * n * n) * sin(radians(M)) + (0.019993 - 0.000101 * n) * sin(radians(2 * M));
    float L = L0 + C;
    float obliquity = 23.439 - 0.0000004 * n;

    // Вычисление деклинации Солнца
    float declination = degrees(asin(sin(radians(obliquity)) * sin(radians(L))));

    // Время в UT
    float time = hour + minute / 60.0;
    float solarTime = time + (4 * (longitude - 15 * 0)) / 60.0;

    // Вычисление угла высоты
    float hourAngle = 15 * (solarTime - 12);
    float altitude = degrees(asin(sin(radians(latitude)) * sin(radians(declination)) + cos(radians(latitude)) * cos(radians(declination)) * cos(radians(hourAngle))));

    return altitude;
}

void setup() {
    Serial.begin(9600);
    gpsSerial.begin(9600);
    lcd.begin(16, 2);

    if (!rtc.begin()) {
        lcd.print("RTC error");
        while (1);
    }

    if (!gpsSerial) {
        lcd.print("GPS error");
        while (1);
    }
}

void loop() {
    while (gpsSerial.available() > 0) {
        gps.encode(gpsSerial.read());
        if (gps.location.isUpdated()) {
            float latitude = gps.location.lat();
            float longitude = gps.location.lng();

            DateTime now = rtc.now();
            int year = now.year();
            int month = now.month();
            int day = now.day();
            int hour = now.hour();
            int minute = now.minute();
            int second = now.second();

            float solarAltitude = calculateSolarAltitude(latitude, longitude, year, month, day, hour, minute);

            // Выводим данные на ЖК-дисплей
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print("Alt: ");
            lcd.print(solarAltitude);
            lcd.setCursor(0, 1);
            lcd.print("Lat: ");
            lcd.print(latitude, 4);
            lcd.setCursor(0, 1);
            lcd.print("Lon: ");
            lcd.print(longitude, 4);

            Serial.print("Solar Altitude: ");
            Serial.print(solarAltitude);
            Serial.print("°\n");
            Serial.print("Latitude: ");
            Serial.print(latitude, 4);
            Serial.print("\nLongitude: ");
            Serial.print(longitude, 4);
            Serial.print("\n");

            delay(10000); // Обновление каждые 10 секунд
        }
    }
}
