import React, { Component } from 'react'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL;

class NamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      listId: props.listId,
      inputValue: '',
      nameError: ''
    }
  }

  // Get baby names from the API
  getNames() {
    console.log(this.state)
    axios.get(`https://${baseUrl}/api/v1/baby_names?list_id=${this.state.listId}`)
      .then(response => {
        this.setState({ names: response.data.baby_names, listId: response.data.list.id })
      })
      .catch(error => console.log(error))
  }

  // Create new baby name and post to API
  createName = (e) => {
    if (e.key === 'Enter') {
      axios.post(`${baseUrl}/api/v1/baby_names`, { baby_name: { name: e.target.value, list_id: this.state.listId } })
        .then(response => {
          console.log(response.data)
          const data = response.data
          this.setState({
            names: data.baby_names,
            inputValue: '',
            nameError: data.error[0]
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
        <div className="nameError">
          {this.state.nameError}
        </div>
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