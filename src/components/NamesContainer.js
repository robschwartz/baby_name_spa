import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'


class NamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      listId: props.listId,
      inputValue: ''
    }
  }

  getNames() {
    axios.get(`/api/v1/baby_names?list_id=${this.state.listId}`)
      .then(response => {
        this.setState({ names: response.data.baby_names, listId: response.data.list.id })
      })
      .catch(error => console.log(error))
  }

  createName = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/baby_names', { baby_name: { name: e.target.value, list_id: this.state.listId } })
        .then(response => {
          console.log(response.data)
          const names = update(this.state.names, {
            $splice: [[0, 0, response.data]]
          })
          console.log()
          this.setState({
            names: names,
            inputValue: ''
          })
        })
        .catch(error => console.log(error))
    }
  }

  componentDidMount() {
    this.getNames()
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="nameInput"
            type="text"
            placeholder="Add a Name"
            maxLength="50"
            value={this.state.inputValue}
            onKeyPress={this.createName}
            onChange={this.handleChange} />
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