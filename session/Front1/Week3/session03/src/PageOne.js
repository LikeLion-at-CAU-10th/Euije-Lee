import React, {useState} from 'react'
import BlueBox from './BlueBox'


const PageOne = () => {
    // let count = 0;
    // const countUp = () => {
    //     count++;
    //     console.log(count);
    // };

    const [count, setCount] = useState(0);
    const countUpOne = () => {
        setCount(count + 1);
    };
  return (
    <>
      <div>PageOne</div>
      <BlueBox title="Button" count={count} countUp={countUpOne}/>
    </>
  )
}

export default PageOne