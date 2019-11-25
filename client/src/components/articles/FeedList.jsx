import React, { Component } from 'react';

class FeedList extends Component {
   

    render() {
        return (
            <div class="card" style="width: 18rem;">
			  {this.props.posts.map((item, i) => {
            return <Post post={item} key={i} onRemove={this.props.removePost}/>
          })
			</div>
        );
    }
}

export default FeedList;
