import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import store from '../store';
import { Provider, useSelector, useDispatch, connect } from "react-redux";


const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
//   done 이 있다 -> css 컬러 적용
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({ id, text ,done, no}) {
  const dispatch = useDispatch();
//   const done = useSelector((state) => state.done);
  return (  
    <TodoItemBlock>
        {/* {done && <MdDone />}는 채크표시를 하는 아이콘 인거임  */}
      <CheckCircle onClick={()=>{console.log("체크박스 클릭!"); dispatch({type:"CHECK",value:parseInt(no)})}} done={done}>{done && <MdDone/>}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={()=>{console.log("삭제버튼 클릭!"); dispatch({type:"DEL",value:parseInt(no)})}} done={done}>
        <MdDelete/>
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;