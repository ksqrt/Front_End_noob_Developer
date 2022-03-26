import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 이 함수의 역할은 브라우저에 있는 실제 DOM 내부에
  // 리액트 컴포넌트를 렌더링 하겠다는 것을 의미
  // id 값의 root 인 DOM 을 선택하는중
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
