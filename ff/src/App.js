import React, { Component } from 'react';
import axios from 'axios';
import logo from './FoodFightLogo.png';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Food Fight!"
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Food Fight!" />
        </header>
        <div className="App-intro">
          <Board />
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  handleClick() {
    axios.get('https://wfgr4e6vzl.execute-api.us-east-1.amazonaws.com/dev/getAllDynamoEntries')
    .then((response) => {
      console.log(response);
      this.setState({searchResults: response.data.Items});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <button className="square" onClick={(e) => this.handleClick(e)}>
          Get Current Users from DynamoDB
        </button>
        <Results searchResults={this.state.searchResults} />
      </div>
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

    axios.put('https://wfgr4e6vzl.execute-api.us-east-1.amazonaws.com/dev/putNewItemInDynamo', {
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

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: this.props.searchResults
    }
  }

  render() {
      var resultItems = this.props.searchResults.map(function(result) {
          return <ResultItem email={result.email} fname={result.fname} lname={result.lname} />
      });
      return(
          <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {resultItems}
              </tbody>
          </table>           
      );
  }
}

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: this.props.fname
    }
  }
    render() {
        return(
          <tr>
            <td>{this.props.email}</td>
            <td>{this.props.fname}</td>
            <td>{this.props.lname}</td>
          </tr>
        )
    }
}

class Board extends React.Component {
  render() {
    const status = 'Welcome to Food Fight!';

    return (
      <div>
        <span className="status">{status}</span>
        <p />
        <UserForm />
        <p />
        <span className="buttons">
          <Square />
        </span>
      </div>
    );
  }
}


export default App;
