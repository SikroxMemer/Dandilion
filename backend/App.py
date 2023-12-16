from flask import Flask , request , jsonify
from flask_cors import CORS , cross_origin

import sys
sys.dont_write_bytecode = True

from MediaConvertion import MediaConvertion

App = Flask(__name__)
CORS(App)

@App.route('/data' , methods=['POST'])
def index():
    if request.method == "POST":

        data = request.get_json()
        media = MediaConvertion(data['link'] , data['type'])
        return jsonify(media.download())

    else:
        return jsonify({"error" : "Only post method is allowed"})

if __name__ == "__main__":
    App.run(debug=1 , port=8080)