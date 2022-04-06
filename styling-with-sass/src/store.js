import { createStore } from "redux";
import { useRef } from "react";


export default createStore(function (state, action) {
  if (state === undefined) {
    return {
      initialTodos: [
        {
          id: 1,
          text: "프로젝트 생성하기",
          done: false,
        },
        {
          id: 2,
          text: "컴포넌트 스타일링하기",
          done: false,
        },
        {
          id: 3,
          text: "Context 만들기",
          done: false,
        },
        {
          id: 4,
          text: "기능 구현하기",
          done: false,
        },
      ],
    };
  }
  //  store 안의 배열에 특정 id 값을 제거한다
  if (action.type === "DEL") {
    console.log("새끼.. 기합");
    return {
      initialTodos: state.initialTodos.filter(
        (id) => id.id !== parseInt(action.value)
      ),
    };
  }
  //   store 안의 특정 id 값을 체크한뒤 그 id 값에
  //   맞는 다른 boolean 형을 바꾼다
  if (action.type === "CHECK") {
    return {
      initialTodos: state.initialTodos.map((data) => {
        if (data.id === action.value) {
          data.done = !data.done;
          return data;
        } else {
          return data;
        }
      }),
  
    }; 
  }
  if (action.type === "APPEND") {
    console.log("배열에 값 추가");
    return {
      initialTodos : [...state.initialTodos, action.arr],
    };
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
