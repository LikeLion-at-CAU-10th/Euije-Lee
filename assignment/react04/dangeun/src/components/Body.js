import React from "react";
import { useState } from "react";
import Box from "./Box";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const BodyDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled.div`
  width: 100vh;
`;

const SearchDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin: 20px 0 20px 0;
`;

const Body = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <BodyDom>
        <StyledCard>
          <h3>인기 중고</h3>
          <Box />
        </StyledCard>

        <SearchDom>
          <img
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
            src="img/dangeun.jpeg"
            alt="no img"
          />
          <input
            style={{ width: "500px", height: "50px" }}
            type="text"
            placeholder="찾으실 물건을 입력하세요"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </SearchDom>
        <p style={{ textSize: "40px", marginBottom: "20px" }}>{input}</p>
      </BodyDom>
      <Outlet />
    </>
  );
};

export default Body;
