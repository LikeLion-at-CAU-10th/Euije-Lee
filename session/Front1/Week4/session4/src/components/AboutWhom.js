import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/information'

const AboutWhom = () => {
  const a = useParams();
  const nickname = a.nickname;

  const who = data.members.filter((member) => member.nickname === nickname)[0];
  

  return (
    <>
      <div>About {who.name}</div>
      <div>{who.memId}번째 멤버</div>
      <div>닉네임 : {who.nickname}</div>
      <div>소개 : {who.discription}</div>
      <div>역할 : {who.role}</div>
    </>
  )
}

export default AboutWhom