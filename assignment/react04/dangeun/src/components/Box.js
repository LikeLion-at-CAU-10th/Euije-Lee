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
  const [curIdx, setCurIdx] = useState(0);
  const [data, setData] = useState({
    products: [],
  });
  // Json의 불변성을 유지하는 방법...

  const navigate = useNavigate();
  const handleClick = (url, idx) => {
    navigate(url, { state: data.products[idx] });
    setCurIdx(idx);
  };
  // 1. Box Component onClick시, Page Component로 해당 Product의 정보를 넘겨줘야함.
  // 2. Product.id로 url 접근 시에도 Box에 있는 fetch되어 있는 data를 Page에서 받아야함

  // navigate의 추가 인자에 키값은 정해져 있음 이름 바꾸면 안됨.

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://8e527921-b2fa-4f8b-a9bb-79eb5decfd7d.mock.pstmn.io/list"
      );

      setData({
        products: [...response.data.products],
      });
      console.log(data);
    };

    fetchData();
  }, [curIdx, data]);
  // # dependency에 curIdx를 넣은이유
  // 클릭 시에 서버에서 데이터 변경 시, 이를 반영해주기 위해
  // 당근 마켓에 상품 업로드 / 삭제 시, 바로 반영
  // 하지만 클릭 시 마다, fetch가 이루어지기 때문에
  // Cost가 높은 설계라고 할 수 있음.

  // # 방안?
  // 서버에서 일정 주기 / 특정 사용자 액션에 따라 fetch가 이루어지게 함.

  // # data (dependency)
  /*
    WARNING in [eslint] 
    src/components/Box.js
    Line 53:6:  React Hook useEffect has a missing dependency: 'data'. 
    Either include it or remove the dependency array
    react-hooks/exhaustive-deps
  */
  // 잘 모르겠음.

  return (
    <>
      {data.products.length ? (
        data.products.map((product) => (
          <StyledBox
            key={product.preview.id}
            onClick={() =>
              handleClick("/" + product.preview.id, product.preview.id)
            }
          >
            <Product data={product} />
          </StyledBox>
        ))
      ) : (
        <div>땅근 마켓에 상품을 등록해보세요</div>
      )}
    </>
  );
};

export default Box;
