import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

const About = () => {
  return (
    <>
      <div>About</div>
      <UserNavbar/>
      <Outlet /> 
      {/* Outlet -> 자식 컴포넌트 보여줌. */}
    </>
  );
};

export default About;
