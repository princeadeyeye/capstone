import React, { Component } from 'react';
import {feeds} from './api-article';
import auth from '../auth/auth-helper';
import NewPost from './NewPost'
import FeedList from './FeedList'

class Feed extends Component {
state = {
      feed: []
  }
  loadfeed = () => {
    const jwt = auth.isAuthenticated()
    feeds( { t: jwt.token }).then(({data}) => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data)
        this.setState({feed: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadfeed()
  }
  addPost = (post) => {
    const updatefeed = this.state.feed
    updatefeed.unshift(post)
    this.setState({feed: updatefeed})
  }
    addgif = (post) => {
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
            <div className='card' style={{width: "50rem"}}>
              <NewPost addPost={this.addPost} addgif={this.addgif}/>
              <br />
              <FeedList remove={this.remove} feed={this.state.feed}/>
            </div>
        );
    }
}

export default Feed;
