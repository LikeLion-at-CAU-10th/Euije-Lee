import React from "react";
import { Route, Routes } from "react-router-dom";

import Body from "./components/Body";
import Page from "./components/Page";
import "./App.css";
import "./Box.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path=":page" element={<Page/>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
