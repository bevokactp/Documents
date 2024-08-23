"""

python
slideshow carousel wallpaper for mint21 cinnamon
delay 1 minute
path to main folder with subfolders photos as jpeg png
used random a single photo
picture display as mosaic or spanned

не работает
    background color neon blue or violet



sudo nano /etc/systemd/system/wallpaper_slideshow.service
[Unit]
Description=Wallpaper Slideshow Service
After=network.target

[Service]
User=bk
Group=bk
WorkingDirectory=/home/bk/Insync/bevokactp@gmail.com/Google Drive/1/pa/1/шагопись/py/
ExecStart=/usr/bin/python3 "/home/bk/Insync/bevokactp@gmail.com/Google Drive/1/pa/1/шагопись/py/wallpaper.py"
Restart=always

[Install]
WantedBy=multi-user.target

sudo systemctl daemon-reload
sudo systemctl enable wallpaper_slideshow.service
sudo systemctl start wallpaper_slideshow.service
sudo systemctl status wallpaper_slideshow.service

"""
import os
import random
import time
from PIL import Image
import subprocess

# Path to the main folder containing subfolders with images
main_folder = "/home/bk/Insync/bevokactp@gmail.com/Google Drive/1/pa/фото"

# List of allowed background colors
background_colors = ["#0FF", "#7F00FF"]  # Neon blue, Violet

def get_display_size():
    output = subprocess.check_output(['xrandr']).decode('utf-8').split('\n')
    for line in output:
        if '*' in line:
            resolution = line.split()[0]
            width, height = map(int, resolution.split('x'))
            return width, height
    raise ValueError('get_display_size() is failled')
    # return 1920, 1080  # Fallback to a default resolution


def get_random_image(folder):
    images = []
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(("jpeg", "jpg", "png")):
                images.append(os.path.join(root, file))
    return random.choice(images) if images else None


def create_background(color, size=(5000, 5000)):
    img = Image.new("RGB", size, color)
    return img


def set_wallpaper(image_path):
    # Use feh to set the wallpaper
    subprocess.run(["feh", "--bg-max", image_path])


def main():

    display_size = get_display_size()

    if not os.path.exists(main_folder):
        print(f"Error: The path {main_folder} does not exist.")
        return

    while True:

        image_path = get_random_image(main_folder)
        if not image_path:
            print("No images found in the specified folder.")

        # Randomly choose a background color
        bg_color = random.choice(background_colors)

        # Open the selected image
        try:
            img = Image.open(image_path)
        except Exception as e:
            print(f"Error opening image {image_path}: {e}")
            continue

        # Create background
        background = create_background(bg_color, img.size)

        try:
            background.paste(img, (0, 0))
        except Exception as e:
            print(f"Error with image {image_path}: {e}")
            continue

        # Save the combined image
        combined_image_path = "/tmp/current_wallpaper.png"
        background.save(combined_image_path)

        # Set as wallpaper
        set_wallpaper(combined_image_path)

        # Wait for 1 minute
        time.sleep(60)

        print(image_path)


if __name__ == "__main__":
    main()
