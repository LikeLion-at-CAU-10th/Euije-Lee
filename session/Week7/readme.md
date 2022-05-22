# 1. Basic Concept
## 1.1 What is a Server?
'클라이언트에게 정보나 서비스를 제공하는 컴퓨터 프로그램 또는 장치'

cf)
Server : a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients"
This architecture is called the client–server model. Servers can provide various functionalities, often called "services", such as sharing data or resources among multiple clients, or performing computation for a client.
-> 클라이언트-서버 모델이라고 불리는 '아키텍처'이다. 데이터(정보나 서비스)를 주고 받는 구조안에 서버라고 불리는 것이 있는 것. (맞나?)
https://en.wikipedia.org/wiki/Server_(computing)

## 1.2 Linux
Windows, Mac과 같은 오픈소스 컴퓨터 운영체제
Session 中 - 개발을 공부하기로 시작한지 2년이 되어간다. 시작할 때 컴퓨터를 싹 밀고
리눅스를 설치하였다.
리눅스는 강력한 제어할 수 있는 힘이 있음(? - 정확이 기억 안남 ㅜ)

스마트폰에 안드로이드(리눅스 기반임)가 우세해지면서 리눅스는 또한 모든 범용 운영 체제 가운데 가장 많은 설치 기반을 보유하고 있기도 하다. 데스크톱 컴퓨터 중 대략 2.3%만이 리눅스를 사용하지만, 리눅스 커널 기반 크롬 OS를 구동하는 크롬북은 미국 K-12 교육 시장을 지배하며 미국 내 300달러 미만 노트북 컴퓨터 가운데 20% 가까이 차지하고 있다.<Strong>리눅스는 서버 시장에서 주도적인 운영 체제이며</Strong>(상위 100만 대 웹 서버 운영 체제 중 96.4% 이상이 리눅스이다)...
ex) 안드로이드, 타이젠, 비디오게임기, 스마트워치, ...

## 1.3 Shell
Command-Line Interpreter (git bash, bash, zsh, ...)

a shell is a computer program which exposes an operating system's services to a human user or other programs. In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation. It is named a shell because it is the outermost layer around the operating system
https://en.wikipedia.org/wiki/Shell_(computing)

# 2. Django Framework
ㅁ Django Official Documentation (https://docs.djangoproject.com/en/4.0/intro/overview/)
ㅇ Django at a glance
- Because Django was developed in a fast-paced <Strong>newsroom</Strong> environment, it was designed to make common web development tasks <Strong>fast and easy</Strong>. Here’s an informal overview of how to write a <Strong>database-driven</Strong> web app with Django.
-> 
1. newsroom 환경에 적합하다 (instagram, facebook, ...)
2. 빠르고 쉽다
3. 데이터베이스를 기반으로 한다

+ MTV (Model, Template(Controller), View) 패턴을 기반으로 하여
빠르게 Dynamic Web Page를 구현할 수 있다!!!

ㅁ 참고
장고걸스(ko) - https://tutorial.djangogirls.org/ko/
DjangoGirls(en) - https://djangogirls.org/ko/, https://github.com/DjangoGirls
...

# 3. API Design
Application Programming Interface (API)

![restapi](https://user-images.githubusercontent.com/12531340/169665137-ba684f1e-2ac2-4866-b864-2532ce56bdd0.png)


ㅁ RESTful API란 무엇인가요? (AWS) - https://aws.amazon.com/ko/what-is/restful-api/
ㅇ 참조 - https://velog.io/@somday/RESTful-API-%EC%9D%B4%EB%9E%80

1. REST = Representational State Transfer
2. '자원'을 '이름 (Representational)' 으로 구분하여 해당 자원의 '상태'를 주고 받음
3. 웹의 기존 기술과 'HTTP 프로토콜'을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일

ㅁ HTTP Request Method
GET : 서버에 특정 데이터를 요청하여 원하는 데이터를 얻습니다 
POST : 서버에 특정 데이터를 추가 (새로 생성)할 것을 요청합니다 
PATCH : 특정 데이터의 특정 값을 변경할 것을 요청합니다
PUT : 특정 데이터를 전체적으로 변경할 것을 요청합니다

ex)
|HTTP Request Method|End Point|Description|
|-------------------|---|---|
|GET|/member|사용자 정보 조회|
|GET|/footprint|footprint 조회|
|POST|/footprint|footprint 전송|

ㅇ 참고
HTTP(wikipedia, en) : https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
HTTP Request Methods(w3schools) : https://www.w3schools.com/tags/ref_httpmethods.asp

ㅇ The easiest API example in the world :
https://github.com/LikeLion-at-CAU-10th/javascript-practice-server
ㅇ The most organized paper about 'HTTP Status Code' in the world :
https://github.com/KakaoFarm/Youngkwon-TIL/blob/main/Article/HTTP-Status-Code.md

# 04. Terminal 실습
ㅁ 터미널 주요 명령어!!!!!!!!!!!!!!!!!
0. ~ : Home directory
0-1. .. : Outer directory
1. ls -a : 숨긴 파일 포함 보여줌 ( a : all)
2. cp -r : 디렉토리 복사 ( r : recursive )

# 05. Django Server 생성

## 가상환경
가상환경 내 세상 모든 라이브러리를 설치하고 가상환경을 나오면 다 지워짐.
서버 실행 시 내부적으로 설치된 가상환경을 사용하기 때문에 설치된 가상환경의 라이브러리를 사용할 수 있음.
*library의 버전을 관리 통일하기 위함*

1. pip install virtualenv
2. cd 명령어를 통한 workspace로 이동
3. virtualenv myvenv (myvenv라는 가상환경 이름)
4. source myvenv/bin/activate (3번 과정 이후 myvenv 폴더 생성) -> 가상환경 켜짐
- MacOS
source myvenv/bin/activate : 가상환경 실행
- Windows
source myvenv/Scripts/activate : 가상환경 실행

5. (myvenv) pip install django : 가상환경에 django 설치
6. (myvenv) django-admin startproject session06 : 가상환경에 'session06' project 생성
7. (myvenv) python3 session06/manage.py runserver : 가상환경에서 서버 실행
- 6번 명령 실행 시, myvenv와 같은 위치에 session06 폴더가 생성됨. 해당 폴더 내 session06 폴더(project 폴더) 및 manage.py 파일이 생성됨.
- 서버 로그 내  "GET 파일 응답 숫자" 등을 확인할 수 있음.
- 초기 설정 값 ' fonts.css, Roboto-Regular/Bold/Light-webfont.woff, favicon.ico
-> ctrl + c : 서버 종료

* git / 프로젝트 관리 꿀팁 : 
- /User/euije(user name)/Projects 폴더 생성후 해당 폴더 git 설정 (git init)
- 해당 폴더에 프로젝트 별로 파일 생성 후 git commit
- 컴퓨터 바꾸면 clone 받아서 사용하면 개꿀
* VSC 꿀팁 : Command + p , 파일 검색후 경로 확인 가능.

# 06. Django Server 구축

<a href=""> 장고서버를 돌려보자! </a>

# 07. 보안

ㅇ CORS : Cross-Origin Resource Sharing 
- Origin(출처)이 다른 곳으로부터 리소스 공유. ‘출처’ : 프로토콜, 서버 Host, 포트번호,..
ㅇ CSRF : Cross-Site Request Forgery
- 해커가 특정 사이트에 로그인 된 사용자에게 강제로 작업을 수행하게 하는 공격
- 2008년 당시 옥션이 위의 공격으로 개인정보 유출 당함. <a href="https://biz.chosun.com/site/data/html_dir/2008/04/17/2008041700945.html"> 기사 </a>

ㅇ -> <a href="https://github.com/adamchainz/django-cors-headers">'django-cors-headers' </a> 라이브러리 사용하자!

1. pip install django-cors-headers
2. session06/settings.py 에 아래 코드 추가
INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]
3. session06/settings.py 에 아래 코드 삭제
MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]
4. session06/settings.py 에 아래 코드 추가
MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    ...,
]
5. session06/settings.py 에 아래 코드 추가
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = [
    'http://127.0.0.1:5501',
    '서버의 데이터(응답)을 보낼 수 있는 주소',
]
