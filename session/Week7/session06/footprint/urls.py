from . import views # footprint app 내의 views.py 파일
from django.urls import path

urlpatterns = [
    path("", views.footprint_GET),
    path("send", views.footprint_POST),
]

