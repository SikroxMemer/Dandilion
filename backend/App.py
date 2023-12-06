from flask import Flask , request , jsonify
from flask_cors import CORS , cross_origin

App = Flask(__name__)
CORS(App)



@App.route('/data' , methods=['POST'])
def index():
    if request.method == "POST":
        data = request.get_json()
        return jsonify(
            data
        )
    else:
        return jsonify(
            {
                "error" : "Only post method is allowed"
            }
        )

if __name__ == "__main__":
    App.run(debug=1 , port=8080)