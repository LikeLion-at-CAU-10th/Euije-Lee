import React from 'react';
import Product from './Product';
import data from './data.json';
import "./Box.css";
import styled from 'styled-components';

const StyledBox = styled.button`
    border: 1px solid transparent;
    width: 30vh;
    height: 30vh;
    font-size: 15px;
    background-color: white;
    text-align: left;
    margin: 0vh 2vh 2vh 0vh;
`;

const Box = () => {
    return (
        <>
            {data.products.map((product) => (
                <StyledBox key={product.id}>
                    <Product data={product}/>
                </StyledBox>
            ))}
        </>
    );
    
}

export default Box;