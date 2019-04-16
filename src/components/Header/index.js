import React, { Component } from 'react';

import logo from "../../assets/logo.png";
import './style.css';

export default class Header extends Component {
  render() {
    return(    
      <div>
        <header>
            <img src={logo} alt=""/>
            <h1>Todo List</h1>
        </header>
      </div>
    );
  };
}
