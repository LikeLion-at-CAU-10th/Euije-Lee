from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def json_response(request):
    if request.method == "GET":

        data = {
            'name': 'euije',
            'school' :'CAU',
        }

        return JsonResponse(data=data)

def http_response(request):
    if request.method == "GET":
    
        return HttpResponse("Hello World!")

def index(request):
    if request.method == "POST":
        name = request.POST.get('name') 
        # 'name'은 html의 name

        data ={
            'name':name
        }

        return render(request, 'index.html', context = data)

    else:
        return render(request, 'index.html', context = data)

