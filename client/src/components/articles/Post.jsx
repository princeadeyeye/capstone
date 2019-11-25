import React, { Component, PropTypes } from 'react';

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
        console.log(data.error)
      } else {
        this.props.onRemove(this.props.post)
      }
    })
  }
    render() {
    	return
    	(
    			<div class="card" style="width: 18rem;">
    			  <div class="card-body">
    			    <h5 class="card-title">Special title treatment</h5>
    			    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    			    <a href="#" class="btn btn-primary">Go somewhere</a>
    			  </div>
    			</div>
    			)
        return 
        (
        	<div class="card" style="width: 18rem;">
			  <img class="card-img-top" src="..." alt="Card image cap">
			  <div class="card-body">
			    <h5 class="card-title">Card title</h5>
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  </div>
			  <ul class="list-group list-group-flush">
			    <li class="list-group-item">Cras justo odio</li>
			    <li class="list-group-item">Dapibus ac facilisis in</li>
			    <li class="list-group-item">Vestibulum at eros</li>
			  </ul>
			  <div class="card-body">
			    <a href="#" class="card-link">Card link</a>
			    <a href="#" class="card-link">Another link</a>
			  </div>
			</div>
            
        );
    }
}

export default Post;
