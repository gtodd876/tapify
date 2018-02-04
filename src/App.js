import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    let tempo = [];
    let taps = [];
    document.body.addEventListener('keydown', e => {
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
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Tapify</h1>
        <p className="App-intro">Tap the spacebar to give the tempo and return to lock it in</p>
        <h2>Your tempo is {}</h2>
      </div>
    );
  }
}

export default App;
