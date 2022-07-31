import React, { useState } from "react";



const Test = () => {
    const [myArr, setMyArr]= useState([1,2,3,4]);

    const handleMyArr = () => {
        const copy = myArr;
        copy.push(5);
        setMyArr(copy);
    }

    const handleMyArr2 = () => {
        const copy = [...myArr];
        copy.push(5);
        setMyArr(copy);
    }

    // # React와 불변성.

    // handleMyArr()
    // React는 State의 변경 여부를 주소값의 변경에 따라 판단한다.
    // myArr, copy의 주소값이 같기 때문에 State의 변경이 이루어 지지 않는다고 판다.
    // reRender가 이루어지지 않음.

    // handleMyArr2()
    // Spread Operator '...'
    // 기본 값을 복사하여 새로 주소 생성
    // Keyword - 'Shallow Copy', 'Deep Copy'

    const handleMyArr3 = () => {
        const copy = [...myArr];
        copy.push(5);
        setMyArr(copy);
        console.log(myArr);
    }

    // # useEffect

    // handleMyArr3()
    // setMyArr()는 비동기
    // 따라서 log(myArr) 먼저 실행

    /*
        useEffect(() => {
            FIRST

            return (
                SECOND
            )
        }, [THIRD])
    */

    return (
        <div onClick={handleMyArr}>{myArr}</div>
    )
}

export default Test;