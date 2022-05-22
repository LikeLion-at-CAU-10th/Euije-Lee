from django.db import models
from django.dispatch import receiver

# Create your models here.

# models.py : 테이블을 만들고, 관계를 정의하는 파일
# 특정 데이터 묶음을 정의해줍니다

# class이름 starts with 대문자
# class이름 -> table
# attribute -> column

class Footprint(models.Model):
    footprint_id = models.AutoField(primary_key=True)
    # 식별자

    receiver = models.TextField(null=False) # null = False -> receiver의 값이 null 이면 false
    # 장고내 데이터베이스 논리적 오류를 잡아주어야함
    message = models.TextField(null=False)
    sent_at = models.DateTimeField(auto_now_add=True, blank=False)
    # TMI : created_at, updated_at 데이터베이스 설계 시 꼭 관리해주는 데이터

# Footprint라는 함수 작성
# 이 함수가 자동으로 데이터베이스에 저장을 시켜주는 것이 아님
# 데이터 마이그레이션을 시켜주어야함
# python3 manage.py makemigrations
# python3 manage.py migrate
# -> session06/footprint/migrations/0001_initial.py 설정
