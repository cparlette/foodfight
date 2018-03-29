import React, { Component } from 'react';
import logo from './FoodFightLogo.png';
import './App.css';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Routes from "./Routes";

class App extends Component {
  componentDidMount(){
    document.title = "Food Fight!"
  }
  
  render() {
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
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="/put"> Sign Up </NavItem>
                <NavItem href="/get"> Current Users </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes />
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
