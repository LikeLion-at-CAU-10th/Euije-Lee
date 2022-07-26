import React from 'react'
import Box from './Box'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 100vh;
`;

const Body = () => {
  return (
    <>
      <StyledApp>
        <StyledCard>
          <h3>인기 중고</h3>
          <Box />
        </StyledCard>
      </StyledApp>
      <Outlet/>
    </>
  )
}

export default Body;