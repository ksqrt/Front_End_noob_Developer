import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
    const initialTodos = useSelector((state) => state.initialTodos);
  return (
    <TodoListBlock>
        {initialTodos.map((user, index) => (
          <TodoItem text={user.text} done={user.done} key={user.id} no={user.id}/>
        ))}
      
    </TodoListBlock>
  );
}

export default TodoList;
