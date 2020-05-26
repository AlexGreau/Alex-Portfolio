import React from 'react';
import './home.css';
import {getName} from '../../Routes.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    getName();
    return (
      <div className="home">
        <h1>hellu from home</h1>
      </div>
    );
  }
}

export default Home;