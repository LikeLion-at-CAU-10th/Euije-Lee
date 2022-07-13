import React, {useState} from 'react'
import BlueBox from './BlueBox'

const PageTwo = () => {
    const [count, setCount] = useState(0);
    const countUpThree = () => {
        setCount(count + 3);
    };
  return (
    <>
        <div>PageTwo</div>
        <BlueBox title="버튼" count={count} countUp={countUpThree}/>
    </>
  )
}

export default PageTwo;