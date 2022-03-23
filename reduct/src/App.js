import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';

class AddNumber extends Component {
  render() {
    return (
      <div>
       <h1>Add Number</h1>
       <input type="button" value="+"></input> 
       <input type="text" value="0"></input> 
      </div>
    )
  }
}
class AddDisplay extends Component {
  render() {
    return (
      <div>
       <h1>Dislay Number</h1>
       <input type="text" value="0"></input> 
      </div>
    )
  }
}

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <AddDisplay></AddDisplay>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
