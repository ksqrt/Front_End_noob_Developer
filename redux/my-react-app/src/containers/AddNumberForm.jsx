import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from "../store";
// 컨테이너 에서 리덕스 작업을

export default class AddNumberForm extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.dispatch({ type: "INCREMENT", size: size });
        }.bind(this)}
      ></AddNumber>
    );
  }
  s;
}
