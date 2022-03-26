import React from "react";
import "./App.css";
// 리액트 컴포넌트를 만들때는 리액트를 먼저 임포트 해준다

// 또한 export default 를 써서 다른 부모함수에 전달해준다
export default function Hello(props) {
  // let 은 변수 변경 가능 재선언 불가능
  // const 는 변수 변경 불가능 재선언 불가능
  let name1 = "fuck u";
  console.log(name1);
  name1 = "Ssibal";
  console.log(name1);
  //  var 은 한번더 선언 했음에도 불구하고 에러가 나오지 않는다.
  // 따라서 var 보단 let 과 const 를 선언하자!

  return (
    <>
      {/*  jsx 에서 null, false ,undefined 를 렌더링하면 아무것도 나오지 않는다 */}
      <div style={{ color: props.color }}>
        {/* 이렇게 보통 3항연산자를 사용하여 조건부 렌더링 */}
        {props.isSpecial ? <b>*</b> : null}안녕하세요 {props.name}{" "}
      </div>
    </>
  );
}

// defaultProps
// props 가 없을때 값들을 정의한다
Hello.defaultProps = {
  name: "노네임",
};
