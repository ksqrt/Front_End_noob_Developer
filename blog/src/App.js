import "./App.css";
import { useState, useRef, useEffect } from "react";
import UserList from "./UserList";

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

        <br></br>
        <UserList></UserList>
      </div>
    </>
  );
}
export default App;
