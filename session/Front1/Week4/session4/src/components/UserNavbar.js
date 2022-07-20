import React from "react";
import data from "../data/information";
import styled from "styled-components";
import {Link} from "react-router-dom";

const UserNavbarDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserNavbar = () => {
  return (
    <>
      <UserNavbarDom>
        {data.members.map((member, i) => (
          <Link to={`/about/${member.nickname}`} key={i}>
            {member.nickname}
          </Link>
        ))}
      </UserNavbarDom>
    </>
  );
};

export default UserNavbar;
