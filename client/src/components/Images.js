import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
    state = {
        images: [],
        count: 30,
        start: 1
    }
  render() {
    return (
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h2 className="subtitle is-6">Code Challenge #16</h2>
                <h1 className="title is-1">
                  Infinite Scroll Unsplash Code Challenge
                </h1>
              </div>>
              <div className="images">
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
