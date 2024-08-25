import React, { useState } from "react";

const microcontrollerData = [
	{
		name: "Arduino Nano",
		description:
			"Компактная плата на базе ATmega328P, популярная среди любителей электроники.",
		advantages: "Маленький размер, множество библиотек, легко программируется.",
		disadvantages: "Ограниченное количество GPIO, низкая тактовая частота.",
		application: "Прототипирование, обучение, простые проекты.",
		availability: "Широко доступен",
		ramMemoryKB: 2,
		eepromMemoryKB: 1,
		flashMemoryKB: 32,
		clockFrequencyMHz: 16,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "20-40",
		analogPorts: 8,
		digitalPorts: 14,
		digitalPortsWithPWM: 6,
		ioLines: 22,
		operatingVoltageV: "5.0",
		programmingMethod: "USB (FTDI)",
		adc: 8,
		dac: 0,
		timers: "3 x 8",
		peripheralDevices: "GPIO, UART, SPI, I2C",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режим сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "Arduino Pro Mini",
		description:
			"Маленькая и легкая версия Arduino на базе ATmega328P, предназначенная для встроенных систем.",
		advantages:
			"Маленький размер, низкое энергопотребление, множество библиотек.",
		disadvantages: "Нет встроенного USB, требуется внешний программатор.",
		application: "Прототипирование, встроенные системы.",
		availability: "Широко доступен",
		ramMemoryKB: 2,
		eepromMemoryKB: 1,
		flashMemoryKB: 32,
		clockFrequencyMHz: 16,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "5-20",
		analogPorts: 8,
		digitalPorts: 14,
		digitalPortsWithPWM: 6,
		ioLines: 22,
		operatingVoltageV: "3.3-5.0",
		programmingMethod: "UART (внешний программатор)",
		adc: 8,
		dac: 0,
		timers: "3 x 8",
		peripheralDevices: "GPIO, UART, SPI, I2C",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режим сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "ATmega328P",
		description:
			"Основной микроконтроллер для многих плат Arduino, широко используемый в любительских проектах и прототипировании.",
		advantages: "Популярность, доступность, большое количество библиотек.",
		disadvantages:
			"Ограниченная производительность по сравнению с более современными микроконтроллерами.",
		application: "Прототипирование, любительские проекты, обучение.",
		availability: "Широко доступен",
		ramMemoryKB: 2,
		eepromMemoryKB: 1,
		flashMemoryKB: 32,
		clockFrequencyMHz: 16,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "20-40",
		analogPorts: 8,
		digitalPorts: 14,
		digitalPortsWithPWM: 6,
		ioLines: 22,
		operatingVoltageV: "1.8-5.5",
		programmingMethod: "USB, ISP",
		adc: 8,
		dac: 0,
		timers: "3 x 8",
		peripheralDevices: "GPIO, UART, SPI, I2C",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режим сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "ATTiny10",
		description:
			"Компактный 8ный микроконтроллер AVR с низким энергопотреблением.",
		advantages: "Маленький размер, низкая стоимость, простота использования.",
		disadvantages: "Ограниченные ресурсы памяти и периферийных устройств.",
		application: "Простые встроенные системы, датчики, миниатюрные устройства.",
		availability: "Ограниченно доступен",
		ramMemoryKB: 0.5,
		eepromMemoryKB: 0,
		flashMemoryKB: 1,
		clockFrequencyMHz: 12,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "0.5-3",
		analogPorts: 2,
		digitalPorts: 4,
		digitalPortsWithPWM: 1,
		ioLines: 6,
		operatingVoltageV: "1.8-5.5",
		programmingMethod: "HVSP",
		adc: 4,
		dac: 0,
		timers: "1 x 8",
		peripheralDevices: "GPIO, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC",
		hardwareInterfaces: "SPI",
	},
	{
		name: "ATTiny13",
		description:
			"Микроконтроллер AVR с низким энергопотреблением и простотой в использовании.",
		advantages: "Маленький размер, низкая стоимость.",
		disadvantages: "Ограниченные ресурсы памяти и периферийных устройств.",
		application: "Встраиваемые системы, датчики, миниатюрные устройства.",
		availability: "Широко доступен",
		ramMemoryKB: 0.64,
		eepromMemoryKB: 0.64,
		flashMemoryKB: 1,
		clockFrequencyMHz: 9.6,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "0.5-5",
		analogPorts: 4,
		digitalPorts: 5,
		digitalPortsWithPWM: 2,
		ioLines: 6,
		operatingVoltageV: "1.8-5.5",
		programmingMethod: "ISP",
		adc: 4,
		dac: 0,
		timers: "1 x 8",
		peripheralDevices: "GPIO, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC",
		hardwareInterfaces: "SPI",
	},
	{
		name: "ATTiny2313",
		description:
			"Микроконтроллер AVR с расширенными функциями и большей памятью.",
		advantages: "Больше памяти, больше I/O линий.",
		disadvantages:
			"Ограниченные периферийные устройства по сравнению с более крупными микроконтроллерами.",
		application: "Встраиваемые системы, простые контроллеры.",
		availability: "Широко доступен",
		ramMemoryKB: 2,
		eepromMemoryKB: 0.128,
		flashMemoryKB: 2,
		clockFrequencyMHz: 20,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "1-15",
		analogPorts: 0,
		digitalPorts: 18,
		digitalPortsWithPWM: 2,
		ioLines: 18,
		operatingVoltageV: "2.7-5.5",
		programmingMethod: "ISP",
		adc: 0,
		dac: 0,
		timers: "2 x 8",
		peripheralDevices: "GPIO, UART",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "UART",
		hardwareInterfaces: "SPI, UART",
	},
	{
		name: "ATTiny85 Digispark",
		description:
			"Плата на основе ATTiny85 с USB интерфейсом для простого прототипирования.",
		advantages: "USB интерфейс, компактный размер.",
		disadvantages: "Ограниченные ресурсы памяти и портов.",
		application: "Миниатюрные устройства, прототипирование.",
		availability: "Широко доступен",
		ramMemoryKB: 0.5,
		eepromMemoryKB: 0.512,
		flashMemoryKB: 8,
		clockFrequencyMHz: 16,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "0.5-10",
		analogPorts: 4,
		digitalPorts: 6,
		digitalPortsWithPWM: 3,
		ioLines: 6,
		operatingVoltageV: "5.0",
		programmingMethod: "USB",
		adc: 4,
		dac: 0,
		timers: "2 x 8",
		peripheralDevices: "GPIO, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "USB",
		builtInInterfaces: "USB",
		builtInPeripherals: "ADC",
		hardwareInterfaces: "SPI, USB",
	},
	{
		name: "ATTiny85",
		description:
			"Микроконтроллер AVR с хорошим балансом между размером и функциональностью.",
		advantages: "Маленький размер, хорошая поддержка со стороны сообщества.",
		disadvantages: "Ограниченное количество портов и периферии.",
		application: "Простые встроенные системы, миниатюрные устройства.",
		availability: "Широко доступен",
		ramMemoryKB: 0.5,
		eepromMemoryKB: 0.512,
		flashMemoryKB: 8,
		clockFrequencyMHz: 20,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "0.5-10",
		analogPorts: 4,
		digitalPorts: 6,
		digitalPortsWithPWM: 3,
		ioLines: 6,
		operatingVoltageV: "1.8-5.5",
		programmingMethod: "ISP",
		adc: 4,
		dac: 0,
		timers: "2 x 8",
		peripheralDevices: "GPIO, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC",
		hardwareInterfaces: "SPI",
	},
	{
		name: "ATTiny88",
		description:
			"Улучшенная версия ATTiny85 с большим количеством портов и памяти.",
		advantages: "Большое количество портов, увеличенная память.",
		disadvantages: "Ограниченные периферийные устройства.",
		application: "Прототипирование, встроенные системы.",
		availability: "Ограниченно доступен",
		ramMemoryKB: 0.5,
		eepromMemoryKB: 0.512,
		flashMemoryKB: 8,
		clockFrequencyMHz: 20,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "0.5-10",
		analogPorts: 8,
		digitalPorts: 16,
		digitalPortsWithPWM: 6,
		ioLines: 16,
		operatingVoltageV: "1.8-5.5",
		programmingMethod: "ISP",
		adc: 8,
		dac: 0,
		timers: "2 x 8",
		peripheralDevices: "GPIO, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC",
		hardwareInterfaces: "SPI",
	},
	{
		name: "ESP-01 ESP8266",
		description:
			"Компактный модуль на базе ESP8266 с Wi-Fi для простых IoT приложений.",
		advantages: "Маленький размер, низкая стоимость, встроенный Wi-Fi.",
		disadvantages: "Ограниченные GPIO, требуется адаптер для программирования.",
		application: "IoT, домашняя автоматизация, сенсоры.",
		availability: "Широко доступен",
		ramMemoryKB: 64,
		eepromMemoryKB: 0,
		flashMemoryKB: 512,
		clockFrequencyMHz: 80,
		bitDepth: 32,
		architecture: "Xtensa",
		cpuType: "RISC",
		cpuFamily: "ESP",
		powerConsumptionmA: "70-215",
		analogPorts: 1,
		digitalPorts: 4,
		digitalPortsWithPWM: 2,
		ioLines: 4,
		operatingVoltageV: "3.0-3.6",
		programmingMethod: "UART",
		adc: 1,
		dac: 0,
		timers: "1 x 32",
		peripheralDevices: "GPIO, PWM, UART, SPI",
		hardwareAcceleration: "Нет",
		operatingSystems: "FreeRTOS",
		powerSavingModes: "Легкий сон, глубокий сон",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Wi-Fi",
		builtInPeripherals: "Wi-Fi",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "ESP32-C3",
		description:
			"32ный микроконтроллер на основе ядра RISC-V с поддержкой Wi-Fi и Bluetooth.",
		advantages:
			"RISC-V архитектура, низкое энергопотребление, встроенные Wi-Fi и Bluetooth.",
		disadvantages: "Ограниченные периферийные устройства по сравнению с ESP32.",
		application: "IoT, умные устройства, энергосберегающие системы.",
		availability: "Ограниченно доступен",
		ramMemoryKB: 400,
		eepromMemoryKB: 0,
		flashMemoryKB: 4096,
		clockFrequencyMHz: 160,
		bitDepth: 32,
		architecture: "RISC-V",
		cpuType: "RISC",
		cpuFamily: "ESP",
		powerConsumptionmA: "50-250",
		analogPorts: 6,
		digitalPorts: 22,
		digitalPortsWithPWM: 14,
		ioLines: 22,
		operatingVoltageV: "2.2-3.6",
		programmingMethod: "USB, UART",
		adc: 6,
		dac: 0,
		timers: "4 x 64",
		peripheralDevices: "GPIO, Wi-Fi, Bluetooth, I2C, SPI, UART, ADC",
		hardwareAcceleration: "ESP32-DSP, Encryption",
		operatingSystems: "FreeRTOS, IDF",
		powerSavingModes: "Light sleep, Deep sleep",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Wi-Fi, Bluetooth",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "ESP32",
		description:
			"Мощный 32ный микроконтроллер с поддержкой Wi-Fi и Bluetooth.",
		advantages:
			"Встроенные Wi-Fi и Bluetooth, большое количество периферийных устройств.",
		disadvantages: "Высокое энергопотребление в активном режиме.",
		application: "IoT, умные устройства, встроенные системы.",
		availability: "Широко доступен",
		ramMemoryKB: 520,
		eepromMemoryKB: 0,
		flashMemoryKB: 4096,
		clockFrequencyMHz: 240,
		bitDepth: 32,
		architecture: "Xtensa",
		cpuType: "RISC",
		cpuFamily: "ESP",
		powerConsumptionmA: "100-300",
		analogPorts: 18,
		digitalPorts: 34,
		digitalPortsWithPWM: 16,
		ioLines: 34,
		operatingVoltageV: "2.2-3.6",
		programmingMethod: "USB, UART",
		adc: 18,
		dac: 2,
		timers: "4 x 64",
		peripheralDevices: "GPIO, Wi-Fi, Bluetooth, I2C, SPI, UART, ADC, DAC",
		hardwareAcceleration: "ESP32-DSP, Encryption",
		operatingSystems: "FreeRTOS, IDF",
		powerSavingModes: "Light sleep, Deep sleep",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Wi-Fi, Bluetooth",
		builtInPeripherals: "ADC, DAC, PWM",
		hardwareInterfaces: "UART, SPI, I2C, I2S",
	},
	{
		name: "LGT8F328P",
		description:
			"Совместимый с Arduino микроконтроллер с дополнительными возможностями, включая встроенный DAC и повышенную тактовую частоту.",
		advantages: "Совместимость с Arduino, DAC, увеличенная тактовая частота.",
		disadvantages: "Меньшая поддержка сообщества.",
		application: "Прототипирование, простые проекты.",
		availability: "Широко доступен",
		ramMemoryKB: 2,
		eepromMemoryKB: 1,
		flashMemoryKB: 32,
		clockFrequencyMHz: 32,
		bitDepth: 8,
		architecture: "AVR",
		cpuType: "CISC",
		cpuFamily: "AVR",
		powerConsumptionmA: "20-40",
		analogPorts: 8,
		digitalPorts: 14,
		digitalPortsWithPWM: 6,
		ioLines: 22,
		operatingVoltageV: "3.3-5.0",
		programmingMethod: "USB (CH340)",
		adc: 8,
		dac: 1,
		timers: "3 x 8",
		peripheralDevices: "GPIO, UART, SPI, I2C, DAC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режим сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM, DAC",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "NodeMCU ESP8266",
		description:
			"Wi-Fi модуль с интегрированным микроконтроллером ESP8266 и возможностью программирования через Lua или Arduino.",
		advantages: "Wi-Fi, простота использования, низкая стоимость.",
		disadvantages: "Ограниченная память и количество портов.",
		application: "IoT, умные устройства, домашняя автоматизация.",
		availability: "Широко доступен",
		ramMemoryKB: 160,
		eepromMemoryKB: 0,
		flashMemoryKB: 4096,
		clockFrequencyMHz: 80,
		bitDepth: 32,
		architecture: "Xtensa",
		cpuType: "RISC",
		cpuFamily: "ESP",
		powerConsumptionmA: "70-200",
		analogPorts: 1,
		digitalPorts: 11,
		digitalPortsWithPWM: 4,
		ioLines: 11,
		operatingVoltageV: "3.0-3.6",
		programmingMethod: "USB, UART",
		adc: 1,
		dac: 0,
		timers: "1 x 64",
		peripheralDevices: "GPIO, Wi-Fi, UART, SPI, I2C",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС, RTOS",
		powerSavingModes: "Light sleep, Deep sleep",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Wi-Fi",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "Nucleo-F303K8",
		description:
			"Микроконтроллер на базе ARM Cortex-M4 с расширенными математическими возможностями.",
		advantages:
			"Высокая производительность, встроенные периферийные устройства.",
		disadvantages: "Сложность в использовании для начинающих.",
		application: "Промышленные и потребительские системы, автоматизация.",
		availability: "Ограниченно доступен",
		ramMemoryKB: 12,
		eepromMemoryKB: 0,
		flashMemoryKB: 64,
		clockFrequencyMHz: 72,
		bitDepth: 32,
		architecture: "ARM Cortex-M4",
		cpuType: "RISC",
		cpuFamily: "STM32",
		powerConsumptionmA: "10-100",
		analogPorts: 7,
		digitalPorts: 18,
		digitalPortsWithPWM: 9,
		ioLines: 18,
		operatingVoltageV: "2.0-3.6",
		programmingMethod: "SWD, ST-LINK",
		adc: 3,
		dac: 2,
		timers: "4 x 16",
		peripheralDevices: "GPIO, UART, SPI, I2C, ADC, DAC",
		hardwareAcceleration: "FPU",
		operatingSystems: "FreeRTOS, Mbed OS",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, DAC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "Nucleo-F303RE",
		description:
			"Микроконтроллер ARM Cortex-M4 на отладочной плате STM32 Nucleo с поддержкой аппаратного ускорения и множества периферийных устройств.",
		advantages:
			"Поддержка отладки, встроенный программатор, высокое качество периферии.",
		disadvantages:
			"Большой размер платы, требует питания от внешнего источника.",
		application: "Прототипирование, встраиваемые системы, обучение.",
		availability: "Широко доступен",
		ramMemoryKB: 64,
		eepromMemoryKB: 0,
		flashMemoryKB: 512,
		clockFrequencyMHz: 72,
		bitDepth: 32,
		architecture: "ARM",
		cpuType: "RISC",
		cpuFamily: "STM32",
		powerConsumptionmA: "60-100",
		analogPorts: 3,
		digitalPorts: 80,
		digitalPortsWithPWM: 12,
		ioLines: 80,
		operatingVoltageV: "3.0-3.6",
		programmingMethod: "SWD, JTAG",
		adc: 3,
		dac: 1,
		timers: "4 x 32",
		peripheralDevices: "GPIO, UART, SPI, I2C, CAN",
		hardwareAcceleration: "DSP, FPU",
		operatingSystems: "FreeRTOS, mbed OS",
		powerSavingModes: "Легкий сон, глубокий сон, режим остановки",
		powerConnection: "VCC/GND",
		builtInInterfaces: "CAN, USB",
		builtInPeripherals: "ADC, DAC, PWM",
		hardwareInterfaces: "UART, SPI, I2C, CAN",
	},
	{
		name: "Raspberry Pi Pico",
		description:
			"Микроконтроллер на базе ARM Cortex-M0+ с двумя ядрами, разработанный для образовательных и любительских проектов.",
		advantages: "Два ядра, большое количество GPIO, поддержка MicroPython.",
		disadvantages: "Отсутствие встроенной памяти для хранения данных.",
		application: "Обучение, прототипирование, IoT.",
		availability: "Широко доступен",
		ramMemoryKB: 264,
		eepromMemoryKB: 0,
		flashMemoryKB: 2048,
		clockFrequencyMHz: 133,
		bitDepth: 32,
		architecture: "ARM",
		cpuType: "RISC",
		cpuFamily: "RP2040",
		powerConsumptionmA: "100-200",
		analogPorts: 3,
		digitalPorts: 26,
		digitalPortsWithPWM: 16,
		ioLines: 30,
		operatingVoltageV: "1.8-3.3",
		programmingMethod: "SWD",
		adc: 3,
		dac: 0,
		timers: "4 x 32",
		peripheralDevices: "GPIO, UART, SPI, I2C, PWM",
		hardwareAcceleration: "Нет",
		operatingSystems: "MicroPython, C/C++ SDK",
		powerSavingModes: "Глубокий сон",
		powerConnection: "VCC/GND",
		builtInInterfaces: "USB",
		builtInPeripherals: "PWM, UART",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "STM32F030F4P6",
		description:
			"Низкопотребляющий 32ный микроконтроллер на базе ARM Cortex-M0.",
		advantages: "Низкое энергопотребление, компактный размер.",
		disadvantages: "Ограниченная производительность и память.",
		application: "Встраиваемые системы, энергоэффективные устройства.",
		availability: "Широко доступен",
		ramMemoryKB: 4,
		eepromMemoryKB: 0,
		flashMemoryKB: 16,
		clockFrequencyMHz: 48,
		bitDepth: 32,
		architecture: "ARM Cortex-M0",
		cpuType: "RISC",
		cpuFamily: "STM32",
		powerConsumptionmA: "2-20",
		analogPorts: 4,
		digitalPorts: 17,
		digitalPortsWithPWM: 6,
		ioLines: 17,
		operatingVoltageV: "2.0-3.6",
		programmingMethod: "SWD, ST-LINK",
		adc: 1,
		dac: 0,
		timers: "2 x 16",
		peripheralDevices: "GPIO, UART, SPI, I2C, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "STM32F103C8T6",
		description:
			"Микроконтроллер ARM Cortex-M3, популярный для разработки и прототипирования.",
		advantages:
			"Широкие возможности, большое количество периферийных устройств.",
		disadvantages: "Требует дополнительного оборудования для программирования.",
		application: "Встраиваемые системы, прототипирование, автоматизация.",
		availability: "Широко доступен",
		ramMemoryKB: 20,
		eepromMemoryKB: 0,
		flashMemoryKB: 64,
		clockFrequencyMHz: 72,
		bitDepth: 32,
		architecture: "ARM Cortex-M3",
		cpuType: "RISC",
		cpuFamily: "STM32",
		powerConsumptionmA: "10-80",
		analogPorts: 10,
		digitalPorts: 37,
		digitalPortsWithPWM: 15,
		ioLines: 37,
		operatingVoltageV: "2.0-3.6",
		programmingMethod: "SWD, ST-LINK",
		adc: 2,
		dac: 0,
		timers: "3 x 16",
		peripheralDevices: "GPIO, UART, SPI, I2C, ADC",
		hardwareAcceleration: "Нет",
		operatingSystems: "Без ОС",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "STM32F411CEU6",
		description:
			"Высокопроизводительный микроконтроллер на базе ARM Cortex-M4 с FPU.",
		advantages:
			"Высокая производительность, аппаратное ускорение для вычислений с плавающей точкой.",
		disadvantages: "Высокая цена по сравнению с другими STM32.",
		application:
			"Проектирование сложных встроенных систем, сигналов, автоматизация.",
		availability: "Широко доступен",
		ramMemoryKB: 128,
		eepromMemoryKB: 0,
		flashMemoryKB: 512,
		clockFrequencyMHz: 100,
		bitDepth: 32,
		architecture: "ARM Cortex-M4",
		cpuType: "RISC",
		cpuFamily: "STM32",
		powerConsumptionmA: "20-150",
		analogPorts: 10,
		digitalPorts: 37,
		digitalPortsWithPWM: 12,
		ioLines: 37,
		operatingVoltageV: "2.0-3.6",
		programmingMethod: "SWD, ST-LINK",
		adc: 3,
		dac: 0,
		timers: "4 x 16",
		peripheralDevices: "GPIO, UART, SPI, I2C, ADC",
		hardwareAcceleration: "FPU",
		operatingSystems: "Без ОС, RTOS",
		powerSavingModes: "Режимы сна",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Нет",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
	{
		name: "Wemos D1 Mini ESP8266",
		description:
			"Компактная плата на базе ESP8266 с встроенным Wi-Fi для IoT проектов.",
		advantages: "Маленький размер, встроенный Wi-Fi, удобство использования.",
		disadvantages: "Ограниченное количество портов.",
		application: "IoT, умные устройства, прототипирование.",
		availability: "Широко доступен",
		ramMemoryKB: 160,
		eepromMemoryKB: 0,
		flashMemoryKB: 4096,
		clockFrequencyMHz: 80,
		bitDepth: 32,
		architecture: "Xtensa",
		cpuType: "RISC",
		cpuFamily: "ESP",
		powerConsumptionmA: "70-200",
		analogPorts: 1,
		digitalPorts: 11,
		digitalPortsWithPWM: 4,
		ioLines: 11,
		operatingVoltageV: "3.0-3.6",
		programmingMethod: "USB, UART",
		adc: 1,
		dac: 0,
		timers: "1 x 64",
		peripheralDevices: "GPIO, Wi-Fi, UART, SPI, I2C",
		hardwareAcceleration: "Нет",
		operatingSystems: "RTOS",
		powerSavingModes: "Light sleep, Deep sleep",
		powerConnection: "VCC/GND",
		builtInInterfaces: "Wi-Fi",
		builtInPeripherals: "ADC, PWM",
		hardwareInterfaces: "UART, SPI, I2C",
	},
];

const MicrocontrollerList = () => {
	const [sortField, setSortField] = useState("name");
	const [sortDirection, setSortDirection] = useState("asc");

	const handleSort = (field) => {
		const direction =
			sortField === field && sortDirection === "asc" ? "desc" : "asc";
		setSortField(field);
		setSortDirection(direction);
	};

	const sortedData = [...microcontrollerData].sort((a, b) => {
		if (typeof a[sortField] === "string") {
			return sortDirection === "asc"
				? a[sortField].localeCompare(b[sortField])
				: b[sortField].localeCompare(a[sortField]);
		} else {
			return sortDirection === "asc"
				? a[sortField] - b[sortField]
				: b[sortField] - a[sortField];
		}
	});

	return (
		<div>
			<h1>Список микроконтроллеров</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort("name")}>Название</th>
						<th onClick={() => handleSort("description")}>Описание</th>
						<th onClick={() => handleSort("advantages")}>Преимущества</th>
						<th onClick={() => handleSort("disadvantages")}>Недостатки</th>
						<th onClick={() => handleSort("application")}>Применение</th>
						<th onClick={() => handleSort("availability")}>Доступность</th>
						<th onClick={() => handleSort("ramMemoryKB")}>RAM (КБ)</th>
						<th onClick={() => handleSort("eepromMemoryKB")}>EEPROM (КБ)</th>
						<th onClick={() => handleSort("flashMemoryKB")}>Flash (КБ)</th>
						<th onClick={() => handleSort("clockFrequencyMHz")}>
							Тактовая частота (МГц)
						</th>
						<th onClick={() => handleSort("bitDepth")}>Разряд (бит)</th>
						<th onClick={() => handleSort("architecture")}>Архитек</th>
						<th onClick={() => handleSort("cpuType")}>процессор</th>
						<th onClick={() => handleSort("cpuFamily")}>Семья</th>
						<th onClick={() => handleSort("powerConsumptionmA")}>
							потребление ток (мА)
						</th>
						<th onClick={() => handleSort("analogPorts")}>аналог портов</th>
						<th onClick={() => handleSort("digitalPorts")}>цифров портов</th>
						<th onClick={() => handleSort("digitalPortsWithPWM")}>
							Цифропорты ШИМ
						</th>
						<th onClick={() => handleSort("ioLines")}>Линии ввода/вывода</th>
						<th onClick={() => handleSort("operatingVoltageV")}>
							Рабочее напряжение (В)
						</th>
						<th onClick={() => handleSort("programmingMethod")}>
							Прошиваніе
						</th>
						<th onClick={() => handleSort("adc")}>АЦП</th>
						<th onClick={() => handleSort("dac")}>ЦАП</th>
						<th onClick={() => handleSort("timers")}>Таймеры</th>
						<th onClick={() => handleSort("peripheralDevices")}>
							Периферийные устройства
						</th>
						<th onClick={() => handleSort("hardwareAcceleration")}>
							Аппаратное ускорение
						</th>
						<th onClick={() => handleSort("operatingSystems")}>
							Операционные системы
						</th>
						<th onClick={() => handleSort("powerSavingModes")}>
							Энерго сбережение
						</th>
						<th onClick={() => handleSort("powerConnection")}>
							Способы подключения питания
						</th>
						<th onClick={() => handleSort("builtInInterfaces")}>
							Встроенные интерфейсы
						</th>
						<th onClick={() => handleSort("builtInPeripherals")}>
							Встроенная периферия
						</th>
						<th onClick={() => handleSort("hardwareInterfaces")}>
							Аппаратные интерфейсы
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((microcontroller, index) => (
						<tr key={index}>
							<td>{microcontroller.name}</td>
							<td>{microcontroller.description}</td>
							<td>{microcontroller.advantages}</td>
							<td>{microcontroller.disadvantages}</td>
							<td>{microcontroller.application}</td>
							<td>{microcontroller.availability}</td>
							<td>{microcontroller.ramMemoryKB}</td>
							<td>{microcontroller.eepromMemoryKB}</td>
							<td>{microcontroller.flashMemoryKB}</td>
							<td>{microcontroller.clockFrequencyMHz}</td>
							<td>{microcontroller.bitDepth}</td>
							<td>{microcontroller.architecture}</td>
							<td>{microcontroller.cpuType}</td>
							<td>{microcontroller.cpuFamily}</td>
							<td>{microcontroller.powerConsumptionmA}</td>
							<td>{microcontroller.analogPorts}</td>
							<td>{microcontroller.digitalPorts}</td>
							<td>{microcontroller.digitalPortsWithPWM}</td>
							<td>{microcontroller.ioLines}</td>
							<td>{microcontroller.operatingVoltageV}</td>
							<td>{microcontroller.programmingMethod}</td>
							<td>{microcontroller.adc}</td>
							<td>{microcontroller.dac}</td>
							<td>{microcontroller.timers}</td>
							<td>{microcontroller.peripheralDevices}</td>
							<td>{microcontroller.hardwareAcceleration}</td>
							<td>{microcontroller.operatingSystems}</td>
							<td>{microcontroller.powerSavingModes}</td>
							<td>{microcontroller.powerConnection}</td>
							<td>{microcontroller.builtInInterfaces}</td>
							<td>{microcontroller.builtInPeripherals}</td>
							<td>{microcontroller.hardwareInterfaces}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MicrocontrollerList;
