import React, { Component } from 'react';
import axios from 'axios';
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
          <Board />
        </p>
      </div>
    );
  }
}

class Square extends React.Component {
  handleClick() {
    axios.put('https://5ughd7di2g.execute-api.us-east-1.amazonaws.com/dev/putNewItemInDynamo', {
      initialtest: 'Plum',
      whatever: 'something'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <button className="square" onClick={(e) => this.handleClick(e)}>
        {this.props.value}
      </button>
    );
  }
}

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    axios.put('https://5ughd7di2g.execute-api.us-east-1.amazonaws.com/dev/putNewItemInDynamo', {
      fname: fname,
      lname: lname,
      email: email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label> First Name:
          <input type="text" name="fname" value={fname} onChange={this.onChange} />
        </label><br />
        <label> Last Name:
          <input type="text" name="lname" value={lname} onChange={this.onChange} />
        </label><br />
        <label> Email Address:
          <input type="text" name="email" value={email} onChange={this.onChange} />
        </label><br />
        <button type="submit">Submit</button>
      </form>
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
        <UserForm />
        <p />
        <div className="buttons">
          {this.renderSquare('Increse Value in DynamoDB')}
          {this.renderSquare('Decrease Value in DynamoDB')}
        </div>
      </div>
    );
  }
}


export default App;
