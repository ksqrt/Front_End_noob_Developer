import DisplayNumber from "../components/DisplayNumber";
import store from "../store";
import React, { Component } from 'react'


export default class DisplayNumberForm extends Component {
    state ={number:store.getState().number};
    // 컨스트럭터가 변화를 감지합니다.
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number : store.getState().number});
        }.bind(this));
    }

  render() {
    return (
      <DisplayNumber number = {this.state.number}></DisplayNumber>
    )
  }
}
