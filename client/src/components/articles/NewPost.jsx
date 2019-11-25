import React, { Component } from 'react';
import {create} from './api-article';
import auth from '../auth/auth-helper';
class NewPost extends Component {
	state = {
	    text: '',
	    photo: '',
	    error: '',
	    user: {}
	  }

	  componentDidMount = () => {
	    this.postData = new FormData()
	    this.setState({user: auth.isAuthenticated().user})
	  }
	  clickPost = () => {
	    const jwt = auth.isAuthenticated()
	    create({
	      userId: jwt.userId
	    }, {
	      t: jwt.token
	    }, this.postData).then((data) => {
	      if (data.error) {
	        this.setState({error: data.error})
	      } else {
	        this.setState({text:'', photo: ''})
	        this.props.addUpdate(data)
	      }
	    })
	  }
	  handleChange = name => event => {
	    const value = name === 'photo'
	      ? event.target.files[0]
	      : event.target.value
	    this.postData.set(name, value)
	    this.setState({ [name]: value })
	  }
    render() {
        return (
          <form>
          	<input />
          	<textarea> </textarea>
          </form>
        );
    }
}

export default NewPost;
