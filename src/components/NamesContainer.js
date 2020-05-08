import React, { Component } from 'react'
import axios from 'axios'

class NamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      listId: props.listId,
    }
  }

  getNames() {
    axios.get(`/api/v1/baby_names?list_id=${this.state.listId}`)
      .then(response => {
        this.setState({ names: response.data })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getNames()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="nameInput" type="text"
            placeholder="Add a Name" maxLength="50"
            onKeyPress={this.createName} />
        </div>
        <div className="listWrapper">
          <ul className="nameList">
            {this.state.names.map((name) => {
              return (
                <li className="name" name={name} key={name.id}>
                  <label className="nameLabel">{name.name}</label>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default NamesContainer