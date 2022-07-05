import React from "react";
import food from "./dish.json";
import styled from "styled-components";

const ImageBox = styled.img`
  width: 30vh;
  height: 30vh;
  margin: 0 0 0 -15vh;
  position: absolute;
`;
const TextBox = styled.p`
  width: 30vh;
  height: 10vh;
  margin: 20vh 0 0 0;
  z-index: 100;

  position: absolute;
  background-color: gray;
  color: white;
  opacity: 0.9;
`;
const DishBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const Dish = () => {
  return (
    <>
      <DishBox>
        {food.dishes.main.discriptions.map((dish) => (
          <div style={{width:'30vh', height:'30vh', margin: '2vh 1vh 0 0', border: '5px solid gray'}}>
            <ImageBox
              key={dish.id}
              src={food.dishes.main.imgs[dish.id].img}
            ></ImageBox>
            <TextBox>
              {dish.name}
              <br />
              {dish.discription}💖
            </TextBox>
            
            
          </div>
        ))}
      </DishBox>
    </>
  );
};

export default Dish;
