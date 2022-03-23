// import logo from "./logo.svg";

import "./App.css";
import { useState } from "react";


function Render(props) {
  const elements = props.name;
  const date_ele = props.date;
  const items = [];
  let i = 0;
  for (i = 0; i < elements.length; i++) {
    items.push(<Article name={elements[i]} date={date_ele[i]}></Article>);
  }
  // for (const [index, value] of elements.entries()) {
  //   items.push(<Article name ={value} key ={index}></Article>);
  // }
  return <div>{items}</div>;
}

// function Sorting(props) {

//   const elements = props;
//   console.log(props);
//   elements.sort();
//   return (
//     elements
//   );
// }

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
  let post = "개발 블로그";
  let arr1 = [
    "파이썬 맛집",
    "남자 코트 추천",
    "강남 육수 맛집",
    "서울 냉면 맛집",
    "html 코드 맛집",
  ];
  let date1 = ["3월 9일", "2월 18일", "1월 6일", "4월 7일", "2월 5일"];

  return (
    <div className="App">
      <div className="black-nav">
        {/* 중괄호로 데이터 바인딩을 쉽게 할 수 있다 
        scr , id , href 등의 어트리뷰트에도 사용이 가능함*/}
        {/* {변수명,함수등} */}
        <div style={{ color: "white", fontSize: "20px" }}>{post}</div>
        {/* JSX 에서 스타일 속성을 집어 넣을때는 귀찮으니 클라스네임을 만들어 쓰자!!*/}
      </div>
      {/* <button onClick={(event) => {event.preventDefault(); arr1 =Sorting(arr1);}}>정렬버튼</button> */}
      <Render name={arr1} date={date1}></Render>
      <Modal title={arr1[0]} date={date1[0]} article={"내용"}></Modal>
    </div>
  );
}
export default App;
