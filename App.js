import React, { Component } from 'react';
import './css/App.css'

import Header from './components/Header'
import Main from './components/Main'
import SocialMedia from './components/SocialMedia'
import SpotifyPlaylist from './components/SocialMedia/SpotifyPlaylist'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Main />
        <div id='lower-background'></div>
        <SocialMedia />
        <SpotifyPlaylist />

      </div>
    );
  }
}

export default App;
