import React, { useEffect, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  // 스테이트 객체 2개 만들기
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  // 미리 추출해주기
  const { username, email } = inputs;
  // 이벤트 감지해서 name과 value 를 가지고오는 함수
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // 스테이트로 배열 선언
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  // useRef 를 사용해 카운터 변수 지정
  const nextId = useRef(4);

  // 배열에 추가해주는 함수
  const onCreate = () => {
    // 객체를 하나 새로 만든뒤
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 새 객체 를 복사해온 기존 객체 뒤에 부착!
    setUsers([...users, user]);
    // 이후 값 초기화
    setInputs({
      username: "",
      email: "",
    });
    // 카운터
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;
