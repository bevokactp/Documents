import time
import logging
from plyer import notification

# Настройка логирования
log_filename = "app.log"

# Настройка основного логера
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Обработчик для записи логов в файл
file_handler = logging.FileHandler(log_filename)
file_handler.setLevel(logging.INFO)
file_handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(message)s"))
logger.addHandler(file_handler)

# Обработчик для вывода логов в консоль
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
console_handler.setFormatter(
    logging.Formatter("%(asctime)s [%(levelname)s] %(message)s")
)
logger.addHandler(console_handler)


def schedule_notifications():
    notification_count = 0
    next_notification_time = time.time() + 60  # Первое уведомление через 60 секунд

    # Логирование времени запуска приложения
    start_time = time.strftime("%H:%M:%S", time.localtime())
    logging.info("Application started at %s", start_time)
    logging.info(
        'Next notification: "Уведомление 1" at %s',
        time.strftime("%H:%M:%S", time.localtime(next_notification_time)),
    )

    while True:
        current_time = time.time()
        if current_time >= next_notification_time:
            notification_count += 1
            notification_text = f"Уведомление {notification_count}"
            notification.notify(
                title="Напоминание",
                message=notification_text,
                timeout=10,  # Уведомление будет отображаться 10 секунд
            )
            logging.info(
                'Showing notification "%s" at %s',
                notification_text,
                time.strftime("%H:%M:%S", time.localtime()),
            )

            # Расчёт времени следующего уведомления
            next_notification_time = time.time() + 60
            logging.info(
                'Next notification: "%s" at %s',
                f"Уведомление {notification_count + 1}",
                time.strftime("%H:%M:%S", time.localtime()),
            )

        time.sleep(10)  # Проверять каждую секунду


if __name__ == "__main__":
    schedule_notifications()
