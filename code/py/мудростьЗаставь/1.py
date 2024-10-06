import os
import time
from PIL import Image, ImageDraw, ImageFont
import math

WIDTH = 1920
HEIGHT = int(WIDTH / 1.618)
BACKGROUND_COLOR = (0, 0, 255)  # Синий фон
TEXT_COLOR = (255, 255, 255)  # Белый текст
IMAGE_DIR = "."
IMAGE_FILE = "/home/bk/Documents/code/py/мудростьЗаставь/_temp_image.png"
MAX_FONT_SIZE = 150
MIN_FONT_SIZE = 20
MAX_WIDTH = WIDTH - 100
FONT_PATH = "/home/bk/Documents/code/py/мудростьЗаставь/2.ttf"  # Путь к вашему шрифту
TIME_DELAY = 60


def draw_sacred_geometry(draw):
    flower_color = (128, 0, 128)  # Фиолетовый цвет
    center_x, center_y = WIDTH // 2, HEIGHT // 2
    radius = min(WIDTH, HEIGHT) // 6

    draw.ellipse(
        (center_x - radius, center_y - radius, center_x + radius, center_y + radius),
        outline=flower_color,
        width=5,
    )

    for angle in range(0, 360, 60):
        offset_x = radius * 1.732 * 0.5 * math.cos(math.radians(angle))
        offset_y = radius * 1.732 * 0.5 * math.sin(math.radians(angle))
        new_center_x = center_x + offset_x
        new_center_y = center_y + offset_y
        draw.ellipse(
            (
                new_center_x - radius,
                new_center_y - radius,
                new_center_x + radius,
                new_center_y + radius,
            ),
            outline=flower_color,
            width=5,
        )


def generate_image(quote):
    image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND_COLOR)
    draw = ImageDraw.Draw(image)

    draw_sacred_geometry(draw)

    font_size = MAX_FONT_SIZE
    font = ImageFont.truetype(FONT_PATH, font_size)

    while font_size > MIN_FONT_SIZE:
        lines = wrap_text(quote, draw, font, MAX_WIDTH)
        text_height = sum(
            draw.textbbox((0, 0), line, font=font)[3]
            - draw.textbbox((0, 0), line, font=font)[1]
            for line in lines
        )
        if text_height <= HEIGHT - 100:
            break
        font_size -= 5
        font = ImageFont.truetype(FONT_PATH, font_size)

    y_text = (HEIGHT - text_height) // 2
    for line in lines:
        text_bbox = draw.textbbox((0, 0), line, font=font)
        text_width = text_bbox[2] - text_bbox[0]
        x_text = (WIDTH - text_width) // 2
        draw.text((x_text, y_text), line, font=font, fill=TEXT_COLOR)
        y_text += text_bbox[3] - text_bbox[1]

    image.save(IMAGE_FILE)


def wrap_text(text, draw, font, max_width):
    words = text.split()
    lines = []
    while words:
        line = ""
        while words:
            test_line = line + words[0] + " "
            text_width = draw.textbbox((0, 0), test_line, font=font)[2]
            if text_width <= max_width:
                line = test_line
                words.pop(0)
            else:
                break
        lines.append(line.strip())
    return lines


def set_wallpaper(image_path):
    os.system(
        f"gsettings set org.gnome.desktop.background picture-uri file://{os.path.abspath(image_path)}"
    )


def main():
    with open(
        "/home/bk/Insync/bevokactp@gmail.com/Google Drive/1/pa/1/мудрости",
        "r",
        encoding="utf-8",
    ) as file:
        quotes = file.readlines()

    while True:
        for quote in quotes:
            generate_image(quote.strip())
            set_wallpaper(IMAGE_FILE)
            time.sleep(TIME_DELAY)


if __name__ == "__main__":
    main()
