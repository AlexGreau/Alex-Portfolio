import React, { Component } from 'react';
import classes from './App.module.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Blog />
      </div>
    );
  }
}

export default App;
