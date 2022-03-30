import React, { Component } from "react";

export default class AddNumber extends Component {
  state = { size: 1, plus: "INCREMENT" };

  render() {
    return (
      <div>
        <h1>AddNumber</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size, this.setState({ plus: "INCREMENT" }));
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="-"
          onClick={function () {
            this.props.onClick(this.state.size, this.setState({ plus: "DECRESE" }));
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
