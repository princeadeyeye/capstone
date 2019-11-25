import React, { Component } from 'react';
import Post from './Post'
class FeedList extends Component {
   

    render() {
        return (
            <div class="card" style={{width: "18rem"}}>
			  {this.props.feed.map((item, i) => {
            return ( <Post 
            post={item} 
            key={i} 
            onRemove={this.props.removePost}
            />)
          }
         )}
			</div>
        );
    }
}

export default FeedList;
