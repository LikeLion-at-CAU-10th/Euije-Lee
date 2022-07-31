import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const [checkValue, setCheckValue] = useState("");

  const here = useRef();

  const handleClick = () => {
    if (value.length <= 5) {
        setValue("");
        here.current.focus();
    } else {
      alert(value);
    }
  };

  useEffect(() => {
    setCheckValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input ref={here} value={value} onChange={handleChange}></input>
      <p>{value}</p>
      <p>{checkValue}</p>
      <button onClick={handleClick}>검색</button>
    </>
  );
};

export default Test;
