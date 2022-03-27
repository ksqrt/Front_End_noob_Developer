import React from "react";
import { useState } from "react";

export default function Counter(props) {
  const [num, setNum] = useState(props.number);


  const onIncrease = () => {
    console.log("+1");
    // setNum 을 사용하면 state 의 값에 변화줄수 있음
    setNum((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    console.log("-1");
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      {/* setState()는 리액트의 함수형 컴포넌트 내에서 상태를 관리하기 위해 사용하는 hooks인 useState()를 통해 반환되는 함수이다. */}
      <button onClick={()=>{setNum(num+1)}}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
} 
