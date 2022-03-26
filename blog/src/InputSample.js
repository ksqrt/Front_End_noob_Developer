import React, { useState } from 'react';

function InputSample(props) {
    const [val,setVal]= useState("");


    return (
    <div>
        {/* 자바스크립트의 이밴트 객체 e */}
      <input onChange={(e)=>{setVal(e.target.value)}} />
      <button onClick={()=>{setVal("")}} >초기화</button>
      <div>
        <b>값: {val} </b>
      </div>
    </div>
  );    
}

export default InputSample;