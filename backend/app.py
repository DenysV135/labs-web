import time
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# Дозволяємо запити з React (localhost:3000)
CORS(app)

METERS = [
    {"id": 1, "title": "OptiWater 300", "desc": "Ультразвуковий лічильник води з імпульсним виходом.", "price": 1200, "category": "water"},
    {"id": 2, "title": "OptiGas Pro", "desc": "Мембранний лічильник газу з термокорекцією.", "price": 2500, "category": "gas"},
    {"id": 3, "title": "OptiVolt Smart", "desc": "Багатотарифний електролічильник день/ніч.", "price": 1800, "category": "electric"},
    {"id": 4, "title": "OptiHeat 500", "desc": "Лічильник тепла з Wi-Fi модулем.", "price": 3200, "category": "electric"}
]

@app.route('/api/meters', methods=['GET'])
def get_meters():
    category = request.args.get('category')
    if category and category != 'all':
        filtered = [m for m in METERS if m['category'] == category]
        return jsonify(filtered)
    
    return jsonify(METERS)

@app.route('/api/meters/<int:meter_id>', methods=['GET'])
def get_meter_by_id(meter_id):
    time.sleep(0.3)
    meter = next((m for m in METERS if m['id'] == meter_id), None)
    if meter is None:
        return jsonify({"error": "Товар не знайдено"}), 404
    return jsonify(meter)

if __name__ == '__main__':
    app.run(debug=True, port=5000)