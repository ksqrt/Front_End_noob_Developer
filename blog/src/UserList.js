import React from "react";

function MakeArr({ user }) {
  return (
    <div>
      사용자 이름 : {user.username}
      <br></br>
      사용자 이메일 : {user.email}
    </div>
  );
}

function UserList(props) {
  const users = props.users
  // 자바스크립트의 map 함수 사용법 map<U>(callbackfn: (value: T, index: number, array: T[])
  // 보통 배열을 렌더링할때 컴포넌트를 하나 더사용하는 모습~

  return (
    <userlist>
      <div>
        {/* map 메서드를 활용하여 효율적으로 코딩한 이후 key 값주기 */}
        {/* map(value: T, index: number, array: T[]) */}
        {users.map((user, index) => (
          <MakeArr user={user} key={index} />
        ))}
      </div>
    </userlist>
  );
}

export default UserList;
