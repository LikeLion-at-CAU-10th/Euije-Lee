import { fetchGET, fetchPOST } from "./dataFetching.js";

// const SERVER_HOST =
//   "https://asia-northeast3-likelion-js-practice.cloudfunctions.net/api";

const SERVER_HOST = "http://127.0.0.1:8000";

const NAME = "이의제";

async function getProfileData(name) {

  const path = "/member";

  // JavaScript는 비동기 언어
  // 비동기 언어란? 동시에 여러 작업을 수행하는 것이다.
  // 코드1, 코드2, 코드3 순서로 작업이 진행 될 때, 
  // 코드1이 코드2에 사용될 때 코드1의 수행을 기다리지 않고 코드2를 수행하는 것
  // 만약 코드가 시간이 오래 걸릴 경우 동기처리를 해주어야 한다.
  // -> async, await

  const res = await fetchGET(SERVER_HOST, path, { name: name });

  const myName = res.data.profile.name;
  const myMbti = res.data.profile.mbti;
  const myGithub = res.data.profile.github;

  document.querySelector('#fetch-name').innerHTML = myName;
  document.querySelector('#fetch-mbti').innerHTML = myMbti;
  document.querySelector('#fetch-github').innerHTML = myGithub;
}

async function getFootprint(name) {

  const path = "/footprint";
  const res = await fetchGET(SERVER_HOST, path, { name: name });

  const message = res.data.messages;

  for(let i = 0 ; i< message.length; i++){
    const messageData = `
    <div class="board-row">
    ${message[i]}
    </div>
    `;
    document.querySelector(".board").innerHTML += messageData;
  }

  
}

async function sendFootprint() {
  const path = "/footprint/send";

  const messageObj = {
    content: document.querySelector(".message-content").value,
    receiverName: document.querySelector(".message-sender").value
  };

  const res = await fetchPOST(SERVER_HOST, path, messageObj);
  if(res.status === 200){
    alert("메시지를 성공적으로 전송하였습니다!");
  }
}

window.onload = function () {
  const sendButton = document.querySelector(".send-btn");
  sendButton.addEventListener("click", () => {
    sendFootprint();
  });
  
  // getProfileData(NAME);
  getFootprint(NAME);
};



