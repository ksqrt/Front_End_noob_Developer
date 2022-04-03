import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { darken, lighten } from "polished";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const CircleButton = styled.button`
  background: #38d9a9;
  /* 호버링 할때는 밝게 */
  &:hover {
    background: ${lighten(0.1, "#38d9a9")};
  }
  /* 액티브 할때는 어둡게 */
  &:active {
    background: ${darken(0.1, "#38d9a9")};
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: ${lighten(0.1, "#ff6b6b")};
      }
      &:active {
        background: ${darken(0.1, "#ff6b6b")};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const dispatch = useDispatch();
 const nextId = useRef(5);  

  const onEnter = ( text ) => {
    const str= text;
    console.log("앤터 입력!!!!");
    const newtodo = { id: nextId.current , text: str, done: false };
    dispatch({ type: "APPEND", arr: newtodo});
    nextId.current += 1
  };
  return (
    <>
      {/* 조건 && expression입니다.*/}
      {/* true일 경우에는 && 이후에 위치한 expression을 반환하고,
        false일 경우 expression을 반환하지 않고 무시합니다. */}
      {open && (
        <InsertFormPositioner>
          <InsertForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
            // 앤터를 누르면 발동하는 이벤트
            // e.target.value 를 전해는 거 포함
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log(e.target.value);
                  onEnter(e.target.value);
                }
              }}
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        {/* 이건 걍 더하기 아이콘 따온거임  */}
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
