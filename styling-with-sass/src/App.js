import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoHead from "./components/TodoHead.js";
import TodoList from "./components/TodoList.js";
import TodoCreate from "./components/TodoCreate.js";
import store from "./store.js";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <Provider store = {store}>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoTemplate>
      </Provider>
    </>
  );
}

export default App;
