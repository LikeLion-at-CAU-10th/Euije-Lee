import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

// ${(props) => props.~~}
const BlueBoxDom = styled.div`
  width: 100px;
  height: 200px;
  background-color: blue;
  border-radius: 20px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueBox = (props) => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount( (c) => c + 1 );
        setCount( (c) => c + 1 );
        setCount( (c) => c + 1 );
        // 3씩 증가

        setCount( count + 1 );
        setCount( count + 1 );
        setCount( count + 1 );
        // 1씩 증가
        // 16ms
    };
    return (
        <>
            <BlueBoxDom onClick={props.countUp}>
                버튼
            </BlueBoxDom>
            <span>Count : {props.count}</span>
        </>
    );
}

// const BlueBox = (props) => {
//     // 'Props' is READ ONLY
//     // props.title = 'Button' (X)
//     // **React doen't detect the change of normal variables.**
//     let count = 0;
//     const countUp = () => {
//         count = count + 1;
//     };
//   return (
//     <>
//         {/* 3. */}
//         {/* Count doesn't change when button is clicked */}
//         {/* Child can't control props */}
//         {/* 
//             <BlueBoxDom btnColor={props.btnColor} onClick={countUp}>
//                 {props.title}
//             </BlueBoxDom>
//             <span>{count}</span> 
//         */}

//         <BlueBoxDom btnColor={props.btnColor} onClick={props.countUp}>
//             {props.title}
//         </BlueBoxDom>
//         <span>{props.count}</span> 
//     </>
//   )
// }

export default BlueBox