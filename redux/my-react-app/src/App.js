import "./App.css";
import React, { Component } from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

// 클래스형 컴포넌트 입니다.

export default class App extends Component {
  state = { number: 0 };

  render() {
    return (
      <>
      
          <AddNumberRoot></AddNumberRoot>
          <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
        
      </>
    );
  }
}
+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
