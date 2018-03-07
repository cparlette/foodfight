import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Food Fight!</h1>
        </header>
        <p className="App-intro">
          <Game />
        </p>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Current DynamoDB Value: X';

    return (
      <div>
        <div className="status">{status}</div>
        <p />
        <div className="board-row">
          {this.renderSquare('Increse Value in DynamoDB')}
          {this.renderSquare('Decrease Value in DynamoDB')}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
