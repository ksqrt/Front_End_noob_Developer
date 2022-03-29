
import './App.css';
import React, { Component } from 'react'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

// 클래스형 컴포넌트 입니다.

function App() {
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
