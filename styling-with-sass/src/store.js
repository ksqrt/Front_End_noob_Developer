import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return {
      number: 0,
      initialTodos: [
        {
          id: 1,
          text: "프로젝트 생성하기",
          done: true,
        },
        {
          id: 2,
          text: "컴포넌트 스타일링하기",
          done: true,
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
//   check 인데 사실 삭제 매커니즘임 ㅋㅋㅋ
  if (action.type === "CHECK") {
    console.log("새끼.. 기합")
    return {initialTodos: state.initialTodos.filter(id=> id.id !== parseInt(action.value))}
  }
  if (action.type === "DECRESE") {
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
