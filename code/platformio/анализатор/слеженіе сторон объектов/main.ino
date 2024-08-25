#include <Wire.h>
#include <RTClib.h>
#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal.h>
#include "solar.h"
#include "lunar.h"

// Настройка модулей
RTC_DS3231 rtc;
TinyGPSPlus gps;
SoftwareSerial gpsSerial(4, 3); // RX, TX для GPS
LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // LCD дисплей

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

            float solarAltitude = calculateSolarAltitude(latitude, longitude, year, month, day, hour, minute);
            float solarDeclination = calculateSolarDeclination(year, month, day, hour, minute);
            float solarRA = calculateSolarRightAscension(year, month, day, hour, minute);

            float lunarLongitude = calculateLunarLongitude(year, month, day, hour, minute);
            float lunarLatitude = calculateLunarLatitude(year, month, day, hour, minute);

            // Выводим данные на ЖК-дисплей
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print("Solar Alt: ");
            lcd.print(solarAltitude);
            lcd.setCursor(0, 1);
            lcd.print("Lunar Long: ");
            lcd.print(lunarLongitude);

            Serial.print("Solar Altitude: ");
            Serial.print(solarAltitude);
            Serial.print("°\n");
            Serial.print("Solar Declination: ");
            Serial.print(solarDeclination);
            Serial.print("°\n");
            Serial.print("Solar RA: ");
            Serial.print(solarRA);
            Serial.print("°\n");
            Serial.print("Lunar Longitude: ");
            Serial.print(lunarLongitude);
            Serial.print("°\n");
            Serial.print("Lunar Latitude: ");
            Serial.print(lunarLatitude);
            Serial.print("°\n");

            delay(10000); // Обновление каждые 10 секунд
        }
    }
}
