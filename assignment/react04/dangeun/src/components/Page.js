import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PageDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Discription = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 50px;
  padding: 0;
  text-align: center;
`;

const Page = () => {
  const {state} = useLocation();
  const data = state.data;
  
  const curIdx = useParams().page;
  const curData = data.products.detail[curIdx-1];

  return (
    <>
      <PageDom>
        <img style={{width: "360px"}} src={data.products.preview[curIdx-1].img} />
        <h1>{curData.title}</h1>
        <p>작성자 : <strong>{curData.author}</strong></p>
        <p>작성일 : <ins>{curData.created_at}</ins></p>
        <Discription >{curData.discription}</Discription>
      </PageDom>
    </>
  )
}

export default Page