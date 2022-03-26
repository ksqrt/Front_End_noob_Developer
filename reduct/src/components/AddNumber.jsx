import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component {
  state = { size: 1 }

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            //요점: reducer()로 state 관리, state 변경은 dispatch()
            // 를 통해 reducer() 안에서 통제
            store.dispatch({ type: "INCREMENT", size: this.state.size });
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onClick={function (e) {
            this.setState({ size: e.target.value });
          }}
        ></input>
      </div>
    );
  }
}
