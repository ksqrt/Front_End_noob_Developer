// import "./App.css";
// import React, { Component } from "react";
// import AddNumberRoot from "./components/AddNumberRoot";
// import DisplayNumberRoot from "./components/DisplayNumberRoot";

// // 클래스형 컴포넌트 입니다.

// export default class App extends Component {
//   state = { number: 0 };

//   render() {
//     return (
//       <>

//           <AddNumberRoot></AddNumberRoot>
//           <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>

//       </>
//     );
//   }
// }
// +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

import "./App.css";
import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  // 불변성 유지
  const newState = { ...currentState };
  // undifined 에 초기값을 넣어줌
  if (currentState === undefined) {
    return {
      number: 0,
      hate: 0,
    };
  }
  // 이후 if 문으로 type 이 바뀔때 마다 조정
  if (action.type === "INCRE") {
    newState.number++;
  }
  if (action.type === "DECRE") {
    newState.number--;
  }

  if (action.type === "INCRE_D") {
    newState.hate++;
  }
  if (action.type === "DECRE_D") {
    newState.hate--;
  }

  return newState;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <div id="container">
      <div id="grid">
        <h1>Root :</h1>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const number = useSelector((state) => state.number);
  const hate = useSelector((state) => state.hate);

  return (
    <div>
      <h1>Left3 : 좋아요👍 {number} </h1>
      <h1>Left3 : 싫어요😂 {hate} </h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <div>
        {" "}
        좋아요
        <input
          type="button"
          value="+"
          onClick={() => {
            dispatch({ type: "INCRE" });
          }}
        ></input>
        <input
          type="button"
          value="-"
          onClick={() => {
            dispatch({ type: "DECRE" });
          }}
        ></input>
      </div>

      <div>
        싫어요
        <input
          type="button"
          value="+"
          onClick={() => {
            dispatch({ type: "INCRE_D" });
          }}
        ></input>
        <input
          type="button"
          value="-"
          onClick={() => {
            dispatch({ type: "DECRE_D" });
          }}
        ></input>
      </div>
    </div>
  );
}
