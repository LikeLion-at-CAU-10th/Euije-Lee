import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Success from "./Success";
import { Navigate } from "react-router-dom";
import { getCookie, setCookie } from './auth/Cookie';


const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const onChangeUserName = useCallback((e) => {
        setUserName(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const user = {
            username: userName,
            password: password
        };

        fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data) => {
            setUserEmail(data.data.email);
            setUserName(data.data.user_name);
            setCookie("email", data.data.email);
            setCookie("userName", data.data.user_name);
            setCookie("isSessionOK", data.success);
        })
        .catch((e) =>{
            setUserName("");
            setPassword("");
            setCookie("isSessionOK", false);
            console.log(e);
        });
    }, [userName, password]);

    if(getCookie("isSessionOK")){
        return <Navigate to="/success" page={<Success />} />;
    }

  return (
    <div id="container">
        <div>
          <h1>Login</h1>
          {/* onsubmit을 통해 submit을 제어 가능 -> form 전송 직전 form 안 데이터의 유효성 검증하기 위해 사용 */}
          <form onSubmit={onSubmit}>
            <label id="user-label">
              <span>유저 아이디</span>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={onChangeUserName}
                />
              </div>
            </label>
            <label id="password-label">
              <span>비밀번호</span>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </label>
            <button type="submit">로그인</button>
          </form>
        </div>
    </div>
  )
}

export default LoginPage