import React, { Component } from 'react'
import store from '../store'
export default class DisplayNumber extends Component {
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
        <div>
          <h1>DisplayNumber</h1>
          <input type="text" value={this.state.number}></input>
        </div>
      )
    }
  }