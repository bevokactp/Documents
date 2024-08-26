#ifndef CONFIG_H
#define CONFIG_H

// Пороги для срабатывания исполнительных механизмов
#define TEMP_WATER_THRESHOLD_HIGH 24  // Верхний порог температуры воды (°C)
#define TEMP_WATER_THRESHOLD_LOW 18   // Нижний порог температуры воды (°C)
#define PH_THRESHOLD_HIGH 6.5          // Верхний порог pH раствора
#define PH_THRESHOLD_LOW 5.5           // Нижний порог pH раствора
#define EC_THRESHOLD_HIGH 2.0          // Верхний порог концентрации питательных веществ (EC)
#define EC_THRESHOLD_LOW 1.0           // Нижний порог концентрации питательных веществ (EC)
#define AIR_HUMIDITY_THRESHOLD_HIGH 70  // Верхний порог влажности воздуха (%)
#define AIR_HUMIDITY_THRESHOLD_LOW 40   // Нижний порог влажности воздуха (%)

#endif
