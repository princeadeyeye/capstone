import React, { Component } from 'react';
import {remove} from './api-article';
import auth from '../auth/auth-helper';

class Post extends Component {
	state = {
		comments: []
	}

	  componentDidMount = () => {
    this.setState( {comments: this.props.post.comments})
  }
  componentWillReceiveProps = (props) => {
    this.setState({comments: props.post.comments})
  }

   updateComments = (comments) => {
    this.setState({comments: comments})
  }
  deletePost = () => {
    const jwt = auth.isAuthenticated()
    remove({
      postId: this.props.post.userId
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
      } else {
        this.props.onRemove(this.props.post)
      }
    })
  }
    render() {
    	return (
	    			<div class="card" style={{width: "18rem"}}>
	    			  <div class="card-body">
	    			    <h5 class="card-title">{this.props.post.title}</h5>
	    			    <p class="card-text">{this.props.post.article}</p>
	    			    <p class="card-text">{this.props.post.authorId}</p>
	    			    <a href="/" class="btn btn-primary">{this.props.post.authorId}</a>
	    			  </div>
	    			</div>
    	);
        
    }
}

export default Post;
