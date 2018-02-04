import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    averageTempo: 0,
  };
  componentDidMount() {
    let tempo = [];
    let taps = [];
    document.body.addEventListener('keydown', e => {
      //reset tempo
      if (e.keyCode === 82) {
        console.log('r');
        tempo = [];
        taps = [];
        this.setState({ averageTempo: 0 });
      }
      //calculate tempo
      if (e.keyCode === 32 && e.keyCode !== 82) {
        tempo.push(new Date().getTime());
      }
      if (tempo.length >= 2) {
        taps.push(tempo[tempo.length - 1] - tempo[tempo.length - 2]);
      }
      if (taps.length >= 2 && e.keyCode !== 82) {
        let average = taps.reduce((a, b) => a + b, 0) / taps.length;
        let bpm = (60000 / average).toFixed(2);
        console.log(`Your average tempo is ${bpm} BPM`);
        this.setState({ averageTempo: bpm });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Tapify</h1>
        <p className="App-intro">Tap the 'spacebar' to calculate tempo and 'r' to reset</p>
        <h2>Your tempo is {Math.floor(this.state.averageTempo)} BPM</h2>
        <button class="btn" role="button" href="#">
          Login to Spotify
        </button>
      </div>
    );
  }
}

export default App;
