from flask import Flask, render_template
from datetime import datetime
import math

app = Flask(__name__)

def calculate_ecliptic_plane():
    now = datetime.utcnow()
    year = now.year
    month = now.month
    day_of_year = now.timetuple().tm_yday

    # Calculate the Julian Date
    JD = (367 * year
          - math.floor(7 * (year + math.floor((month + 9) / 12)) / 4)
          + math.floor(275 * month / 9)
          + day_of_year
          + 1721013.5)

    # Calculate the number of days since the J2000 epoch
    T = (JD - 2451545.0) / 36525

    # Calculate the obliquity of the ecliptic (epsilon)
    epsilon = 23.439292 - 0.000013 * T

    return epsilon

@app.route('/')
def index():
    epsilon = calculate_ecliptic_plane()
    return render_template('index.html', epsilon=epsilon)

if __name__ == '__main__':
    app.run(debug=True)
