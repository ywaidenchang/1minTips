from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

# 임시 데이터 저장소
tips = [
    {"id": 1, "title": "건강 팁", "content": "매일 아침 스트레칭으로 하루를 시작하세요!"},
    {"id": 2, "title": "요리 팁", "content": "파스타 물에 소금을 넣으면 더 맛있어요."},
]

@main.route('/tips', methods=['GET'])
def get_tips():
    return jsonify(tips)

@main.route('/tips', methods=['POST'])
def post_tip():
    new_tip = request.get_json()
    new_tip['id'] = len(tips) + 1
    tips.append(new_tip)
    return jsonify(new_tip), 201
