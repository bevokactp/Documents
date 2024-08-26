#ifndef CONFIG_H
#define CONFIG_H

// Пороги для срабатывания исполнительных механизмов
#define TEMP_AIR_THRESHOLD_HIGH 30  // Верхний порог температуры воздуха (°C)
#define TEMP_AIR_THRESHOLD_LOW 18   // Нижний порог температуры воздуха (°C)
#define TEMP_WATER_THRESHOLD_HIGH 25 // Верхний порог температуры воды (°C)
#define TEMP_WATER_THRESHOLD_LOW 15  // Нижний порог температуры воды (°C)
#define SOIL_MOISTURE_THRESHOLD 500  // Порог влажности почвы
#define AIR_HUMIDITY_THRESHOLD_HIGH 70  // Верхний порог влажности воздуха (%)
#define AIR_HUMIDITY_THRESHOLD_LOW 40   // Нижний порог влажности воздуха (%)
#define SMOKE_DETECTION_THRESHOLD 100  // Порог детекции дыма

#endif
