
import React from 'react';
import './app_flashcards.css';

class FlashcardsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "flash cards !",
    }
  }


  render() {
    return (
      <div className="FlashcardsApp">
        <h1>Hello again :) Welcome to my flashcard app !</h1>
      </div>
    );
  }
}

export default FlashcardsApp;