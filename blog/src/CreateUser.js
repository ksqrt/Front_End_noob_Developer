import React,{useRef} from 'react';


function CreateUser({ username, email, onChange, onCreate }) {
  const herDef = useRef();
  // useEffect(() => { 
  //   herDef.current.focus();
  // },[]);
  
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
        ref = {herDef}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;