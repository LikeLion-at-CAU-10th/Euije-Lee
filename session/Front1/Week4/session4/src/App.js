import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Love from "./pages/Love";
import AboutWhom from "./components/AboutWhom";
import Search from "./components/Search";

const AppDom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  return (
    <>
      <AppDom>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path=":nickname" element={<AboutWhom/>}></Route>
          </Route>
          <Route path="/love" element={<Love />}></Route>
        </Routes>
      </AppDom>
      <Search/>
    </>
  );
}

export default App;
