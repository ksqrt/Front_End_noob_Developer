import React from "react";


function MakeArr({user}){
  return <div>
    사용자 이름 : {user.username}
    <br></br>
    사용자 이메일 : {user.email}
  </div>

}

function UserList() {
  const users = [
    {
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      username: "tester",
      email: "tester@example.com",
    },
    {
      username: "liz",
      email: "liz@example.com",
    },
  ];
  // 자바스크립트의 map 함수 사용법 map<U>(callbackfn: (value: T, index: number, array: T[])
  // 보통 배열을 렌더링할때 컴포넌트를 하나 더사용하는 모습~

  return <userlist> 
      <div>
        {/* (value: T, index: number, array: T[]) */}
      {users.map((user,index) => (
        <MakeArr user={user} key={index} />
      ))}
    </div>

  </userlist>;
}

export default UserList;
