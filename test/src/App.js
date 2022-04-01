import "./App.css";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";

const hardCalculation = (number) => {
  console.log("개같이 !!!! 어려운 계산");
  for (let i = 0; i < 99999999; i++) {}
  return number + 10000;
};
const easyCalculation = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};



export default function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  useEffect(() => {
    console.log("첫실행 useEffect 호출");
  }, []);

  // useMemo 는 메모이제이션 을 사용한다
  // 두번째 인자의 배열안의 state 가 변경될떄만 !! 실행
  const hardSum = useMemo(() => {
    return hardCalculation(hardNumber);
  }, [hardNumber]);
  const easySum = useMemo(() => {
    return easyCalculation(easyNumber);
  }, [easyNumber]);

  // const hardSum = hardCalculation(hardNumber);
  return (
    <div id="container">
      <div id="grid">
        <h3>어려운 계산기</h3>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => {
            setHardNumber(parseInt(e.target.value));
          }}
        ></input>
        <span> + 10000 = {hardSum}</span>

        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => {
            setEasyNumber(parseInt(e.target.value));
          }}
        ></input>
        <span> + 1 = {easySum}</span>
      </div>
    </div>
  );
}
