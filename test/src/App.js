// import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { useMemo } from "react";

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}

export default function App() {
  // const [toggle,setToggle] = useState(true);
  // const [number,setNumber] = useState(0);
  // // useCallback
  // // 메모이제이션을 실행
  // const someFunc = useCallback(() => {
  //   console.log("number : "+number);
  //   return;
  // },[number]);
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  //use 콜백으로 재사용 방지 !!! 효율적인 실행
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px `,
      height: `${size}px `,
    };
  }, [size]);

  useEffect(() => {
    console.log("첫실행 호출, somefunction 호출");
  }, []);

  // useMemo 는 메모이제이션 을 사용한다
  // 두번째 인자의 배열안의 state 가 변경될때만 !! 실행
  // const hardSum = hardCalculation(hardNumber);
  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <div id="grid">
        {/* <input type="number" value ={number} onChange={(e)=>{setNumber(e.target.value)}}></input> */}
        {/* <button onClick={someFunc}>call some Func</button> */}
        {/* <button onClick={()=>{setToggle(!toggle)}}>{toggle.toString()}</button> */}
        <input
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Change theme
        </button>
        <Box createBoxStyle={createBoxStyle}></Box>
      </div>
    </div>
  );
}
