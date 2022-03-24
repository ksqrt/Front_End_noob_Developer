import {createStore, applyMiddleware } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';


export default createStore(function(state,action){
    if (state === undefined){
        return {number : 0}
    }
    if(action.type === "INCREMENT"){
        return {...state, number:state.number + action.size}
    }
    return state;
   
    // 아래코드는 데브툴스를 연결해줌
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

