import React, { Component } from 'react';

import Header from '../Header';
import List from '../List'
import Footer from '../Footer';

import './style.css';

//{this.props.children}

export default class App extends Component
{
  render()
  {
    return(
        <div id="main-container">
            <Header />

            <List />

            <Footer />
        </div>
    );
  };
}
