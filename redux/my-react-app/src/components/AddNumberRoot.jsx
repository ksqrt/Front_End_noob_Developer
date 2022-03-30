import React, { Component } from 'react'
import AddNumber from '../contaniners/AddNumber'

export default class AddNumberRoot extends Component{
   

    render(){
      return (
        <div>
          <h1>Add Num Root</h1>
          <AddNumber onClick={function(size){
              this.props.onClick(size)
          }.bind(this)}></AddNumber>
        </div>
      )
    }
  }