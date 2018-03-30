import React, { Component } from 'react';
import logo from './FoodFightLogo.png';
import './App.css';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  componentDidMount(){
    document.title = "Food Fight!"
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Food Fight!" />
        </header>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"> Food Fight! </Link>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href='/put'> Sign Up </NavItem>
              <NavItem eventKey={2} href='/get'> Current Users </NavItem>
            </Nav>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export class Status extends React.Component {
  render() {
    const status = 'Welcome to Food Fight!';

    return (
      <div>
        <span className="status">{status}</span>
      </div>
    );
  }
}


export default withRouter(App);
