import React, { Component } from 'react';
import './css/App.css'

import Header from './components/Header'
import Main from './components/Main'
import SocialMedia from './components/SocialMedia'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Main />
        <SocialMedia />

      </div>
    );
  }
}

export default App;
