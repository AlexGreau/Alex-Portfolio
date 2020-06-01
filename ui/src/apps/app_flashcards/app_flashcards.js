
import React from 'react';
import './app_flashcards.css';
import Header from '../../component/Header';

class FlashcardsApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="FlashcardsApp">
          <h1>Hello again :) Welcome to my flashcard app !</h1>
        </div>
      </div>
    );
  }
}

export default FlashcardsApp;