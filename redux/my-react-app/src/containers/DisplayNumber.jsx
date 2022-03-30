import DisplayNumber from "../components/DisplayNumber"
import { connect } from "react-redux";

// 컨스트럭트의 역할
// 이 함수는 리덕스 스토어의 값이 변경될때마다 호출되며 
// 그떄마다 state 값이 인자값으로 전송됨 그리고 이 state 를  가공하여 공급함
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

function mapReduxDispatchToReactProps() {
  return {};
}

export default connect(
  mapReduxStateToReactProps,mapReduxDispatchToReactProps
)(DisplayNumber);

// import DisplayNumber from "../components/DisplayNumber";
// import store from "../store";
// import React, { Component } from 'react'

// // 클래스형 컴포넌트 입니다~
// export default class DisplayNumberForm extends Component {

//     state ={number:store.getState().number};

//     // 컨스트럭터가 변화를 감지합니다.
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number : store.getState().number});
//         }.bind(this));
//     }

//   render() {
//     return (
//       <DisplayNumber number = {this.state.number}></DisplayNumber>
//     )
//   }
// }
