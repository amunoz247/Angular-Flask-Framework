#-----------------------------------------------------------------------------------------------------------------------
#
# Flask Backend Data Service
#
# Authors: Andrew Munoz
# Date: April 28, 2021
# Purpose: Send data to Angular front end application for data visualization.
# Output: Data array using jsonify to serialize data in json format.
#
#-----------------------------------------------------------------------------------------------------------------------

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Array declaration that contains weather related data
weather = {
    "data": [
    {
        "date": "1/1/2021",
        "temperature": "23",
        "condition": "Sunny"
    },
    {
        "date": "2/1/2021",
        "temperature": "21",
        "condition": "Snowy"
    },
    {
        "date": "3/1/2021",
        "temperature": "39",
        "condition": "Sunny"
    },
    {
        "date": "4/1/2021",
        "temperature": "44",
        "condition": "Rainy"
    },
    {
        "date": "5/1/2021",
        "temperature": "68",
        "condition": "Rainy"
    },
    {
        "date": "6/1/2021",
        "temperature": "82",
        "condition": "Sunny"
    },
    {
        "date": "7/1/2021",
        "temperature": "94",
        "condition": "Sunny"
    },
    {
        "date": "8/1/2021",
        "temperature": "89",
        "condition": "Cloudy"
    }
    ]
}

# Route decorator tells Flask what URL should trigger the function
@app.route('/', methods=['GET'])
def hello():
	return "Data Service is Running!"

@app.route("/dataReport/", methods = ['GET'])
# Function that returns data in json format
def DataReport():
    global weather
    return jsonify([weather])

# Run the program
if __name__ == "__main__":
	app.run(host ='0.0.0.0', debug = True)
