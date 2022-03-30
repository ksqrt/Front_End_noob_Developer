import React, { Component } from "react";

export default class AddNumber extends Component {
  state = { size: 1 };

  render() {
    return (
      <div>
        <h1>AddNumber</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            //   디스패치는 액션 값을 변경해줌
            // action.type 을 "INCREMENT" 로 action.size 을 this.state.size로
            this.props.onClick(this.state.size);
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
