import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const locate = useLocation();
  // useLocation의 반환값의 형태
  /*
    {
      pathname: '/4',
      search: '',
      hash: '',
      state: null,
      key: 'woh1g0ki'
    }
  */
  //
  const product = locate.state;

  // const curIdx1 = useParams().page;
  // const curIdx2 = locate.pathname.parseInt();
  // 현재 url의 정보는 useLocation or useParams Hook을 사용하여 얻을 수 있다.

  return (
    <>
      <PageDom>
        <img style={{width: "360px"}} src={product.preview.img} alt="no img" />
        <h1>{product.detail.title}</h1>
        <p>작성자 : <strong>{product.detail.author}</strong></p>
        <p>작성일 : <ins>{product.detail.created_at}</ins></p>
        <Discription >{product.detail.discription}</Discription>
      </PageDom>
    </>
  )
}

export default Page