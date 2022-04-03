import React from "react";
import styled from "styled-components";
import useDate from "usedate";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function TodoHead(props) {
    // 시간 표현
    console.log("시간함수 실행");
    var dt = new Date();
    var arrDayStr = ["일", "월", "화", "수", "목", "금", "토"];
    var str = dt.getFullYear()+"년 "+ parseInt(dt.getMonth()+1) + "월 " + dt.getDate() + "일";
    var nal = arrDayStr[dt.getDay()] +"요일"


    // 리스트 중에 done 의 개수 채크
    const todos = useSelector((state) => state.initialTodos);
    // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    const undoneTasks = todos.filter(todo => todo.done !== true);
    
  return (
    <TodoHeadBlock>
      <h1>{str}</h1>
    
      <div className="day">{nal}</div>
      {/* 안한 리스트의 길이 출력  */}
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
