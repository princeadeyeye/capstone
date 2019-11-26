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
          <div class="media">
			  <img class="d-flex rounded-circle avatar z-depth-1-half mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
			    alt="Avatar" />
			  <div class="media-body">
			    <h5 class="mt-0 font-weight-bold blue-text">Anna Smith</h5>
			    <div class="md-form amber-textarea active-amber-textarea">
					  <i class="fas fa-pencil-alt prefix"></i>
					  <textarea id="form22" class="md-textarea form-control" rows="3"></textarea>
					<div class="row d-flex align-items-center">				
				        <div class="text-center col-md-12 mt-3 mb-2">
				          <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1">Send</button>
				        </div>
					</div>
			  </div>
			</div>
		</div>
        );
    }
}

export default NewPost;
