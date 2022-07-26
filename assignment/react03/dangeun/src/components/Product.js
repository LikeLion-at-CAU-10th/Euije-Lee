import React from 'react'
import Like from './Like'
import '../Box.css';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Product = (props) => {
  return (
    <> 
        <img src={props.data.img} alt="no img"></img>

        <MainContainer>

            <ContentContainer>
                <p><b>{props.data.title}</b></p>
                <p className="address">{props.data.address}</p>
                <p className="price">{props.data.price}</p>
            </ContentContainer>

            <Like />

        </MainContainer>
    </>
  )
}

export default Product;