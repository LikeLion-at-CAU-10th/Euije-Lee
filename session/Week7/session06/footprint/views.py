# from django.shortcuts import render 
# -> MVT

from footprint.models import Footprint
from django.http import JsonResponse
import json

def footprint_GET(request):
    footprints = Footprint.objects.filter(receiver='이의제').order_by('-sent_at')
    # ORM
    # '-' : 내림차순
    # filter return값 : 'QuerySet' - 배열과 비슷하지만 사용에 일부 제약이 있음. 
    # (영권님 - 아직 장고에서 밖에 못 봄)
    messages = []

    for i in range(len(footprints)):
        messages.append(footprints[i].message)

    # SQLite -> Json
    return JsonResponse( {
        'status': 200,
        'message': 'Footprint 조회 성공',
        'data': {
            'messages': messages
        }
    } )


def footprint_POST(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    Footprint.objects.create(message=body['content'], receiver=body['receiverName'])
    # ORM
    # footprint_id, sent_at은 데이터 제작/수정 시 자동으로 채워짐 

    return JsonResponse( {
        'status': 200, # GET -> 200, POST -> 201
        'message': '메시지 저장 성공',
    })



# Create your views here.

# urls.py 오면 
# ex) 회원가입, footprint 조회, 생성, 수정, 삭제 함수....