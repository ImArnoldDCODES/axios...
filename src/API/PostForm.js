import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         body: '',
         title: ''
      }
    }

     handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
    }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Id</label>
                <input
                name="userId"
                value={userId}
                onChange= {this.handleChange}
                 type="text">
                </input>
            </div>
            <div>
                <label>Title</label>
                <input
                name="title"
                value={title}
                onChange= {this.handleChange}
                 type="text">
                </input>
            </div>
            <div>
                <label>Body</label>
                <input
                name="body"
                value={body}
                onChange= {this.handleChange}
                 type="text">
                </input>
            </div>
            <button type='submit'>
                Submit Now
            </button>
        </form>
      </div>
    )
  }
}

export default PostForm