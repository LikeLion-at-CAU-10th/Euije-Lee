import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const StyleButton = styled.button`
  background-color: skyblue;
  border-radius: 20px;
  border: 0;
  margin: 2vh;
  padding: 1vh;
  outline: 0;
  cursor: pointer;
`;

const Lists = () => {
  const navigate = useNavigate;
  const [members1, setMembers1] = useState([]);
  const [members2, setMembers2] = useState([]);

  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // fetch("https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setMembers1(data);
    //   });

    const fetchData = async () => {
      setLoading(true);

      const response = await axios.get(
        "https://220213fa-2acc-4019-a210-b010a269ce40.mock.pstmn.io"
      );
      setMembers2(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>로딩 중</h1>;
  }

  if (!members2 || !members1) {
    return null;
  }

  const handleClick = (url, id) => navigate(url, { state: members2[id - 1] });

  return (
    <>
      {/* {members1.map((member) => (
        <StyleButton key={member.memId}>{member.name}</StyleButton>
      ))} */}

      {members2.map((member) => (
        <StyleButton onClick={() => handleClick(`/${member.memId}`, member.memId)} key={member.memId}>
          {member.name}
        </StyleButton>
      ))}
      <Outlet />
    </>
  );
};

export default Lists;
