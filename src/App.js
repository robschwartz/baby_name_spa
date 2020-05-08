import React, { Component } from 'react';
import './App.css';
import NamesContainer from './components/NamesContainer'

class App extends Component {

  // Generate Random id
  randomId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const { length: charactersLength } = characters;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Pull list_id from URL or create new one if not there
  getListId = (props) => {
    let listId = new URLSearchParams(props.location.search).get("list_id")
    if (listId) {
      console.log("found list id", listId)
      return listId
    } else {
      listId = this.randomId(12)
      console.log("New list id", listId)
      props.history.push(`/?list_id=${listId}`)
      return listId
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Baby Name List</h1>
        </div>
        <NamesContainer
          listId={this.getListId(this.props)}
        />
      </div>
    );
  }
}

export default App;