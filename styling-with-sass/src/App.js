import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoHead from "./components/TodoHead.js";
import TodoList from "./components/TodoList.js";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoTemplate>
      
    </>
  );
}

export default App;
