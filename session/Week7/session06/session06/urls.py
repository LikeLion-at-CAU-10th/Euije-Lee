"""session06 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.conf.urls import include

from views import json_response, http_response

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('footprint/', include('footprint.urls')),

    path('/', http_response, name='http_response'),
    path('json/', json_response, name='json_response'),
]

# 사용자 path입력이 들어오면 어디로 안내해줄지를 당담하는 파일
