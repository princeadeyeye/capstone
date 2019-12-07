import React, { Component } from 'react';
import Post from './Post'
class FeedList extends Component {
   

    render() {
        return (
            <div class="card">
			  {this.props.feed.map((item, i) => {
                return ( <Post 
                post={item} 
                key={i} 
                remove={this.props.remove}
            />)
          }
         )}
			</div>
        );
    }
}

export default FeedList;
