import React from 'react';
import axios from 'axios';

export default class ListUsers extends React.Component {
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