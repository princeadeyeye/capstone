import React, { Component } from 'react';
import {create} from './api-article';
import auth from '../auth/auth-helper';


class NewPost extends Component {
	state = {
		id:10,
		title: '',
	    article: '',
	    authorId: '',
	    createdOn: new Date(),
	    photo: '',
	    error: ''
	  }

	  componentDidMount = () => {
	    this.postData = new FormData()
	    this.setState({authorId: auth.isAuthenticated().userId})
	    this.setState({ id: this.state.id + 1 });
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
	        this.setState({	title: '',
						    article: '',
						    authorId: '',
						    createdOn: '',
						    photo: '',
						    error: ''
						})
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
          <div className = "media">
			  <img className = "d-flex rounded-circle avatar z-depth-1-half mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
			    alt="Avatar" />
			  <div className = "media-body">
			    <h5 className = "mt-0 font-weight-bold blue-text">Anna Smith</h5>
			    <div className = "md-form amber-textarea active-amber-textarea">
				    <input 
				    	className="form-control form-control-sm" 
				    	type="text" 
				    	placeholder="title" 
				    	value={this.state.title}
	            		 onChange={this.handleChange('title')}
				    	/>
					<textarea   
						  id="form22" 
						  className = "md-textarea form-control" 
						  rows="5"
						  value={this.state.article}
	            		  onChange={this.handleChange('article')}
						  >
					</textarea>
					<label for="exampleFormControlFile1"></label>
					<input 
						    type="file" 
						    className = "form-control-file" 
						    id="exampleFormControlFile1" 
						    accept="image/*" 
						    onChange={this.handleChange('photo')}
						    />
					<div className = "row d-flex align-items-center">				
				        <div className = "text-center col-md-12 mt-3 mb-2">
				          <button 
				          type="button" 
				          className = "btn btn-success btn-block btn-rounded z-depth-1"
				          disabled={this.state.article === '' && typeof this.state.photo == "Object" }
				          onClick={this.clickPost}
				          >Send</button>
				        </div>
					</div>
			  </div>
			</div>
		</div>
	</form>
     );
    }
}

export default NewPost;
