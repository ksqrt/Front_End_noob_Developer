import React, { Children } from 'react';


// 쓰임 당하는곳에서 값을 정한다 children
// 쓰이는곳(App.js) 에서 값을 정한다 props(부모)
function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Wrapper;