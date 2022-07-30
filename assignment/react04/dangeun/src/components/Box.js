import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../Box.css";

import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBox = styled.button`
  border: 1px solid transparent;
  width: 30vh;
  height: 30vh;
  font-size: 15px;
  background-color: white;
  text-align: left;
  margin: 0vh 2vh 2vh 0vh;

  cursor: pointer;
`;

const Box = () => {
  const [data, setData] = useState({
    products: {
      detail: [{ id: 0, img: "", title: "", address: "", price: "" }],
      preview: [
        { id: 0, author: "", title: "", created_at: "", discription: "" },
      ],
    },
  });
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url, { data: data });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://adba018f-daae-4071-98c4-51e3712cb2da.mock.pstmn.io/list"
      );

      setData({
        ...data,
        products: response.data.products,
      });
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      {data.products.preview.map((product) => (
        <StyledBox
          key={product.id}
          onClick={() => handleClick("/" + product.id)}
        >
          <Product data={product} />
        </StyledBox>
      ))}
      {/* <div>{data.products.preview[0].id}</div> */}
    </>
  );
};

export default Box;
