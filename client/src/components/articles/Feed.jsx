import React, { Component, PropTypes } from 'react';

class Feed extends Component {
state = {
      feed: []
  }
  loadfeed = () => {
    const jwt = auth.isAuthenticated()
    listfeed({
      userId: jwt.user.userId
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({feed: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadPosts()
  }
  addPost = (post) => {
    const updatefeed = this.state.feed
    updatefeed.unshift(post)
    this.setState({feed: updatefeed})
  }
  remove = (post) => {
    const updatefeed = this.state.feed
    const index = updatefeed.indexOf(post)
    updatefeed.splice(index, 1)
    this.setState({feed: updatefeed})
  }


   
    render() {
        return (
          <NewPost addPost={this.addPost} />
          <br />
          <FeedList removepost={this.removepost} feed={this.state.feed}/>
        );
    }
}

export default Feed;
