import { createStore } from "redux";

// 스토어는 인자로 리듀서를 받습니다
// 리듀서는  인자로 스테이트(데이터) 와 액션을 가집니다
export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }
  if (action.type === "DECRESE") {
    return { ...state, number: state.number - action.size };
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
