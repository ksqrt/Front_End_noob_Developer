import "./App.css";
import React from "react";
import { useState } from "react";
import store from "./store";



function App() {
  const [num,setNum] = useState(0);

  return (
    <div>
      <button onClick={() => {setNum(num+1)}}>Add</button>
      <span>{num}</span>
      <button onClick={() => {setNum(num-1)}}>Minus</button>
      
    </div>
  );
}

export default App;
