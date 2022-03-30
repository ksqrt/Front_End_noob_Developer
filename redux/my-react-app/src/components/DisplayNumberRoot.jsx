import React, { Component } from 'react';
import DisplayNumber from '../containers/DisplayNumber';


export default class DisplayNumberRoot extends Component
    {
        render(){
          return (
            <div>
              <h1>Display Num Root</h1>
              <DisplayNumber></DisplayNumber>
            </div>
          )
        }
      }