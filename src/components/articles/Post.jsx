import React, { Component } from 'react';
import {remove} from './api-article';
import auth from '../auth/auth-helper';
import {Link} from 'react-router-dom';
class Post extends Component {
	state = {
		comments: {}
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
      postId: this.props.post.articleid
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
      } else {
        this.props.remove(this.props.post)
      }
    })
  }
    render() {
    	return (
                         <div class="post-content">
                        <div class="post-date hidden-xs hidden-sm">
                          <h5>{this.props.post.userid}</h5>
                        </div>

                        <img src="" alt="post-image" class="img-responsive post-image" />
                        <div class="post-container">
                          <img src="" alt="user" class="profile-photo-md pull-left" />
                          <div class="post-detail">
                            <div class="user-info">
                              <h5><a href="timeline.html" class="profile-link">{this.props.post.title}</a> <span class="following">following</span></h5>
                              <p class="text-muted">{this.props.post.createdon}</p>
                            </div>
                            <div class="reaction">
                              <Link to = {"/articles/" + this.props.post.articleid} > 
                              <i class="icon ion-thumbsup"></i>1</Link>
                              <a onClick={this.deletePost}><i class="fa fa-thumbs-down"></i> 0</a>
                            </div>
                            <div class="line-divider"></div>
                            <div class="post-text">
                              <p>  {this.props.post.article} <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                            </div>
                            <div class="line-divider"></div>
                            <div class="post-comment">
                              <img src="" alt="" class="profile-photo-sm" />
                              <p><a href="timeline.html" class="profile-link">comment userid </a><i class="em em-laughing"></i> comment section </p>
                            </div>
                            <div class="post-comment">
                              <img src="" alt="" class="profile-photo-sm" />
                              <p><a href="timeline.html" class="profile-link">comment userid</a> comment section </p>
                            </div>
                            <div class="post-comment">
                              <img src="" alt="" class="profile-photo-sm" />
                              <input type="text" class="form-control" placeholder="Post a comment" />
                            </div>
                          </div>
                        </div>
                      </div>
    	);
        
    }
}

export default Post;
