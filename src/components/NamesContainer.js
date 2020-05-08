import React, { Component } from 'react'

class NamesContainer extends Component {
  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="nameInput" type="text"
            placeholder="Add a Name" maxLength="50" />
        </div>
        <div className="listWrapper">
          <ul className="nameList">
          </ul>
        </div>
      </div>
    )
  }
}

export default NamesContainer