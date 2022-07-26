import React from 'react';
import Product from './Product';
import data from '../data/data.json';
import "../Box.css";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const handleClick = (url) => {
        navigate(url);
    };

    return (
        <>
            {data.products.preview.map((product) => (
                <StyledBox key={product.id} onClick={()=> handleClick("/" + product.id)}>
                    <Product data={product}/>
                </StyledBox>
            ))}
        </>
    );
    
}

export default Box;