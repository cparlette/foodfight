import React, { Component } from 'react';
import axios from 'axios';

export default class UserForm extends Component {
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