import React from "react";
import { useLocation } from "react-router-dom";

const List = () => {
  const { state } = useLocation();
  return (
    <>
      <p>memId={state.memId}</p>
      <p>name={state.name}</p>
      <p>nickname={state.nickname}</p>
      <p>role={state.role}</p>
      <p>discription={state.discription}</p>
    </>
  );
};

export default List;
