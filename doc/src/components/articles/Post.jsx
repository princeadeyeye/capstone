import React, { Component } from 'react';
import {remove} from './api-article';
import auth from '../auth/auth-helper';
import {Link} from 'react-router-dom';
class Post extends Component {
	state = {
		comments: [],
    article : {}
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
            <div className="card">
              <img className="card-img-top" style={{width:"8em", height:"8em"}} src={this.props.post.article} alt={this.props.post.articleid}/>
              <div className="card-body">
                <h5 className="card-title">{this.props.post.title}</h5>
                <p className="card-text">{this.props.post.article}</p>
              </div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item">ArticleId: {this.props.post.articleid}</li>
                <li className="list-group-item">AuthorId: {this.props.post.userid}</li>
                <li className="list-group-item">CreatedOn: {this.props.post.createdon}</li>
              </ul>
              <div className="card-body">
                <Link 
                to = {"/articles/" + this.props.post.articleid} 
                className="card-link" 
                >
                View Article
                </Link>
                <button onClick={this.deletePost} className="card-link">Delete Article</button>
                <a href="/" className="card-link">Add comment</a>
              </div>
              <br />
              <hr />
          </div>
    	);
        
    }
}

export default Post;
