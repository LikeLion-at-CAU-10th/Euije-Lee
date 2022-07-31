import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import data from "../data/information";

const Dom = styled.div`
  display: flex;
  flex-direction: column;
`;

const More = styled.div`
  color: grey;
  font-style: italic;
  margin-top: 2%;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  // display: ${(props) => (props.isClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: blue;
  color; white;
  border-raidus:10px
`;

const AboutWhom = () => {
  const a = useParams();
  const nickname = a.nickname;

  const [isClicked, setIsClicked] = useState(false);

  const who = data.members.filter((member) => member.nickname === nickname)[0];

  const handleMore = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Dom>
        <div>About {who.name}</div>
        <div>닉네임 : {who.nickname}</div>
        <div>{who.memId}번째 멤버</div>
        <div>역할 : {who.role}</div>
        <div>소개 : {who.discription}</div>

        <More onClick={handleMore}>더보기</More>
        {isClicked ? (
          <Modal>{who.name}에 대해 더 알고 싶으신가요 ?</Modal>
        ) : null}

        {/* 
          <Modal isClicked={isClicked}>{who.name}에 대해 더 알고 싶으신가요 ?</Modal>
        */}
      </Dom>
    </>
  );
};

export default AboutWhom;
