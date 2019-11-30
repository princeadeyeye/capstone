import React, { Component } from 'react';
import {create} from './api-article';
import auth from '../auth/auth-helper';
import moment from 'moment'
import { createGif } from '../gifs/api-gifs'


class NewPost extends Component {
	state = {
		title: '',
	    article: '',
	    userid: '',
	    createdOn: moment(new Date()),
	    photo: null,
	    error: ''
	  }

	  componentDidMount = () => {
	    this.postGif = new FormData()
	    this.setState({userid: auth.isAuthenticated().userId})
	  }

	  clickPost = () => {
	  		const articlepost = {
			    title: this.state.title,
			    article: this.state.article,
			    userid: this.state.userid,
			    createdOn: this.state.createdOn,
	
			}

	    const jwt = auth.isAuthenticated()
	    create( {t: jwt.token}, articlepost).then((data) => {
	      if (data.error) {
	        this.setState({error: data.error})
	      } else {
	        this.setState({	title: '',
						    article: '',
						    userid: '',
						    createdOn: '',
						    error: ''
						})
	        this.props.addPost(data)
	      }
	    })
	  }

	 sendGif = () => {

	    const jwt = auth.isAuthenticated()
	    createGif( {t: jwt.token}, this.postGif).then((data) => {
	      if (data.error) {
	        this.setState({error: data.error})
	      } else {
	        this.setState({	title: '',
						    article: '',
						    userid: '',
						    createdOn: '',
						    photo: '',
						    error: ''
						})
	        this.props.addgif(data)
	      }
	    })
	  }

	  handleChange = name => event => {
	    const value = name === 'photo'
	      ? event.target.files[0]
	      : event.target.value
	      console.log(value, this.state.userid)
	    this.postGif.set(name, value)
	    this.postGif.append("photo", value);
	    this.postGif.append('userid', this.state.userid);
	    console.log(this.postGif)
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
						    <button 
				          type="button" 
				          className = "btn btn-success"
				          disabled={this.state.photo === null}
				          onClick={this.sendGif}
				          >Send</button>
					<div className = "row d-flex align-items-center">				
				        <div className = "text-center col-md-12 mt-3 mb-2">
				          <button 
				          type="button" 
				          className = "btn btn-success btn-block btn-rounded z-depth-1"
				          disabled={this.state.article === ''}
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
