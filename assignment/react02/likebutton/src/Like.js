import React, {useState} from 'react'
import styled from 'styled-components'

const LikeButton = styled.img`
    width: 20px;
    height: 20px;
    src: ${(props) => props.src}
`;

const Like = () => {
    const [like, setLike] = useState(false);
  return (
    <>
        <LikeButton 
            src={like ? "img/like1.png" : "img/like0.png"}
            onClick={(e) => setLike(!like)}>
            {/* 
                onClick={setLike(!like)} 라고 작성 시 
                'Too many re-renders.
                React limits the number of renders to prevent an infinite loop'
                에러 발생
                Arrow 형태 or function 형태로 작성하면 정상적으로 작동함
                의제 생각) setState를 일반 형태로 쓰면 
                리렌더링이 일어나기 때문에 'Like' 컴포넌트의 생성주기가 완료되기 전에
                렌더링을 요청하므로 무한 루프가 발생함. (setState는 비동길)

                https://wnsdufdl.tistory.com/245
            */}
        </LikeButton>
    </>
  )
}

export default Like;