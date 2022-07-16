import React from "react";
import Box from "./Box";
import "./App.css";
import "./Box.css";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 100vh;
`;

const App2 = () => {
  return (
    <>
      <StyledApp>
        <StyledCard>
          <h3>인기 중고</h3>
          <Box />
        </StyledCard>
      </StyledApp>

    </>
  );
};

export default App2;
