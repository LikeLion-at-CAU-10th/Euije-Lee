import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.btnColor || "blue"};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-direnction: column;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <ButtonDom>
        <Button onClick={() => handleClick("/")} btnColor="green">
          {/* <Link to="/">Home</Link> */}Home
          {/* <Link>Home</Link> */}
        </Button>
        <Button onClick={() => handleClick("/about")} btnColor="pink">
          {/* <Link>About</Link> */} about
        </Button>
        <Button onClick={() => handleClick("/love")}>
          {/* <Link>Love</Link> */}love
        </Button>
      </ButtonDom>
    </>
  );
};

export default Navbar;
