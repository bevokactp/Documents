#include "lighting.h"
#include "temperature.h"
#include "energy_monitoring.h"
#include "notifications.h"
#include "water_control.h"
#include "motion_detection.h"
#include "remote_control.h"

void setup() {
    Serial.begin(9600);
    initLighting();
    initTemperature();
    initEnergyMonitoring();
    initNotifications();
    initWaterControl();
    initMotionDetection();
    initRemoteControl();
}

void loop() {
    handleLighting();
    handleTemperature();
    handleEnergyMonitoring();
    handleNotifications();
    handleWaterControl();
    handleMotionDetection();
    handleRemoteControl();
}
