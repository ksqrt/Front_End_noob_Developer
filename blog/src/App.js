import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "개발 블로그";

  return (
    <div className="App">
      <div className="black-nav">
        {/* 중괄호로 데이터 바인딩을 쉽게 할 수 있다 
        scr , id , href 등의 어트리뷰트에도 사용이 가능함*/}
        {/* {변수명,함수등} */}
        <div style={{ color: "white", fontSize: "20px" }}>{post}</div>

        {/* JSX 에서 스타일 속성을 집어 넣을때는 귀찮으니 클라스네임을 만들어 쓰자!!*/}
      </div>
      <Article name = "서울 냉면 맛집" date = "3월 22일"></Article>
      <Article name = "남자 코트 추천" date = "3월 18일"></Article>
      <Article name = "강남 육수 맛집" date = "3월 23일"></Article>

    </div>
  );
}

function Article(props) {
  // state는 변수대신에 쓰는 데이터 저장공간
  // state는 변경되면 HTML 이 자동으로 재 렌더링 된다!!!! 따라서 앱같은 동작이 씹가능
  // [state 데이터 , state 데이터 변경함수]
  let [title,useTitle] = useState(props.name);
  let [date,useDate] = useState(props.date);

  return (
    <article>
      <div className="list">
        <h3> {title} </h3>
        <p>{date} 발행</p>
        <hr></hr>
      </div>
    </article>
  );
}

export default App;
