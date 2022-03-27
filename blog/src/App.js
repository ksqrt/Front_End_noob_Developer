// import logo from "./logo.svg";

import "./App.css";
import { useState, useRef, useEffect } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

// function Sorting(props) {

//   const elements = props;
//   console.log(props);
//   elements.sort();
//   return (
//     elements
//   );
// }

// props 는 프로퍼티의 줄임말
function Article(props) {
  // state는 변수대신에 쓰는 데이터 저장공간
  // state는 변경되면 HTML 이 자동으로 재 렌더링 된다!!!! 따라서 앱같은 동작이 씹가능
  // [state 데이터 , state 데이터 변경함수]
  let [title, usetitle] = useState(props.name);
  let [date, usedate] = useState(props.date);
  let [like, uselike] = useState(0);

  function Titlechange(props) {
    // 수정된 [데이터]를 만든다 원본 state 수정 x
    // state 의 복사본을 만들어서 수정하세요 == 중요한 리액트의 전통적인 관습 입니다.
    // 이때 state 를 deep copy 해서 수정해야 합니다. [...] 사용
    var newArr = [...title];
    newArr = "여자 코트 추천";
    usetitle(newArr);
  }

  return (
    <article>
      <div className="list">
        <h3>
          {" "}
          {title}{" "}
          <span
            onClick={() => {
              uselike(like + 1);
            }}
          >
            👍
          </span>
          {like}
          <br></br>
          <br></br>
          <input></input>
          <button
            onClick={() => {
              Titlechange();
            }}
          >
            이름변경 버튼
          </button>
        </h3>
        <p>{date} 발행</p>
        <hr></hr>
      </div>
    </article>
  );
}
// 컴포넌트 유의사항 1. 이름은 대괄호 2. return 안에는 하나의 태그만 (부모태그는 하나만!!)
// 반복출현하는 HTML 덩어리들 , 재 랜더링이많이 일어나는 HTML UI 들 , 다른 페이지 만들때
function Modal(props) {
  return (
    <div>
      <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.article}</p>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const inputRef = useRef();
  const rendercount = useRef(0);

  // useEffet 함수는 처음 랜더링 시작시 무조건 한번 실행되고
  // 배열의 state 인자가 바뀔때마다 실행된다 빈배열이면 실행 x
  useEffect(() => {
    console.log("첫 랜더링만 실행 DOC 를위해 사용");
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    rendercount.current = rendercount.current + 1;
    console.log("현재 랜더카운트 " + rendercount.current);
  }, [name, count]);

  return (
    // 이름없이 작성한 Fragment 를 사용해서 감싼다!
    <>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <br></br>
        <input
          ref={inputRef}
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            alert("환영합니다" + inputRef.current.value);
            inputRef.current.focus();
          }}
        >
          로그인
        </button>
        <br></br>
        <span>name : {name}</span>
      </div>
    </>
  );
}
export default App;
