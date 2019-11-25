import React, { Component } from 'react';

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
            <div class="input-group mb-3">
			  <div class="custom-file">
			    <input type="file" class="custom-file-input" id="inputGroupFile02">
			    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
			  </div>
			  <div class="input-group-append">
			    <span class="input-group-text" id="">Upload</span>
			  </div>
			</div>
        );
    }
}

export default NewPost;
