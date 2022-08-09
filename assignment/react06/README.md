# Login

## 1. Problem

- 일반적으로 인터넷 쇼핑몰에서 로그인하는 상황을 생각해보자.
    - 사용자(유저)는 다음과 같은 행동을 순서에 따라 하고 싶다.
        1. 개인 정보와 구매정보를 저장하기 위한 회원가입 / 로그인을 한다. (구매한 물건의 정보, 장바구니 등)
        2. 회원가입 / 로그인의 사용자 정보를 토대로 물건을 구매 한다.


- 하지만, HTTP 프로토콜은 상태(State)를 저장하지 않는다는 규약이 있다.
    - 사용자(유저)의 1번, 2번 행동이 어떠한 `연결고리`가 있는지 저장하지 않는다.

<br/>

- `HTTP - stateless`

<img width="766" alt="스크린샷 2022-08-09 오후 3 59 12" src="https://user-images.githubusercontent.com/12531340/183584709-2fad0e53-4b71-4e92-90f2-d55d34bdf8f5.png">

> [mdn docs - "HTTP은 상태가 없지만, 세션은 있습니다"](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview#http%EC%9D%80_%EC%83%81%ED%83%9C%EA%B0%80_%EC%97%86%EC%A7%80%EB%A7%8C_%EC%84%B8%EC%85%98%EC%9D%80_%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)

<br/>

- 따라서, Client / Server가 사용자의 상태(로그인 상태)를 (임시)저장할 수 있는 방법이 필요하다.

---

## 2. Cookie, Session, Token

- 요청 간의 `연결고리`를 저장할 수 있는 방법 다음과 같다.
    1. `Cookie`
    2. `Session`
    3. `Token`

<br/>

- `Cookie`
    - **Browser에 저장하는 임의의 정보를 쿠키라고 한다.**
    - 구성
        - (Key, Value) pair
        - Expires
        - Path
        - 도메인, 생성일, 다음에 대해 보내기, ...
    - 특징
        - 데이터 크기에 제한이 있다. (300개, 도메인당, 4kb)
        - 빠르다.
        - 보안에 취약하다.
        - 자동으로 생성 된다. (?)

<br/>

- `Session`
    - **Client 정보를 Server DataBase에 저장하는 방식을 세션이라고 한다.**
    - 특정 State를 가지는 (ex. isLogined) Client에 Session-ID를 부여하여 서버에 (Session-ID, State) 형식으로 **Session-DB**에 저장한다.

    <br/>

    - 패턴
        - Client는 Server에서 할당(생성)한 Session-ID를 `Cookie`로 저장한다.
        - State 유지에 일정한 **시간**이 지나거나 Client의 특정 조건(Browser 종료 등)이 달성 되면 State 유지를 멈춘다.
    - 특징
        - Client의 수가 많아지면 Session-DB의 용량도 증가 한다.
            - [redis](https://redis.io/)
        - 느리다.
        - 보안이 좋다.
        - Server를 증설, 분리하는 등 Server가 고도화 되면 유지 보수가 힘들다.
        - *Netfilx* 계정 공유, *Instragram* 현재 접속 기기 관리 등 활용 가능하다.

<br />

- `Token`
    - **Request가 (특정)서버에서 발급 되었음을 증명하는 정보.**
    - 서버에서 Verification 정보를 담아 Token을 Request한다.

    <br/>

    - [JWT(Json Web Token)](https://jwt.io/)
        - Json형식 Data를 SHA-256 해싱을 통해 발급한 Token

    - 특징
        - Session-DB와 같은 추가적인 비용 없다.
        - 카카오 소셜 로그인도 JWT을 이용한다.
        - 용량(Token 길이)에 제한이 없다.
        - Login을 위해 **request token, refresh token**이 필요하다

---

## 3. CORS (Cross-Origin Resource Sharing)


- [6주차 공통세션 과제](https://github.com/LikeLion-at-CAU-10th/Euije-Lee/blob/main/assignment/assignment-06(Django)/docs/7.Security.md#cors--cross-origin-resource-sharing)

---

## 4. Web Storage

- 이해를 잘 못했다.
- 공부 필요.

---

## 5. Session

### CORS handling

- Client Request에 아래 값을 넣어주어야함 (header X !!)
>mode: "cors",
credentials: "include",

``` javascript
...

fetch("http://127.0.0.1:8000/auth/login", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})

...

```

### Result

<img width="960" alt="스크린샷 2022-08-09 오후 4 55 02" src="https://user-images.githubusercontent.com/12531340/183605571-1d494277-7d5b-4490-9f08-bfb42919e8b4.png">
<img width="960" alt="스크린샷 2022-08-09 오후 4 55 09" src="https://user-images.githubusercontent.com/12531340/183605587-263f9834-3f56-42d2-b0d0-47f1eb0edb15.png">
<img width="960" alt="스크린샷 2022-08-09 오후 4 57 47" src="https://user-images.githubusercontent.com/12531340/183605599-be0b40d0-d04f-4b6d-b6dd-5df5009c200f.png">
<img width="960" alt="스크린샷 2022-08-09 오후 4 57 49" src="https://user-images.githubusercontent.com/12531340/183605613-1d77fbc8-2041-438f-bdab-6de9f2aee905.png">
<img width="960" alt="스크린샷 2022-08-09 오후 4 57 51" src="https://user-images.githubusercontent.com/12531340/183605617-b99f7c25-2117-4e4d-a661-26862382e5e5.png">
