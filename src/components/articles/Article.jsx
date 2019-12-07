import React, { Component } from 'react';
import { list } from './api-article'
import { Link } from 'react-router-dom'

class Article extends Component {
       state = {
			articles: []
		}
   

	

componentDidMount() {
    list().then(({data}) => {
      if (data.error) {
        console.log(data.error)
      } else {
      	console.log(data)
        this.setState({articles: data})
      }
    })
  }
    render() {
        return (
        <div class="card text-center">
			  <div class="card-header">
			    Articles
			  </div>
			  <div class="card-body">
			  {this.state.articles.map((item, i) => {
			  	return <Link to = {"/articles/" + item.articleid} key={i}>
			  		<h5 class="card-title">{item.title}</h5>
			  		<p class="card-text">{item.article}</p>
			  		<p href="" class="btn btn-primary">{item.userid}</p>
			  		<div class="card-footer text-muted">
			  			{item.createdon}
			  		</div>
			  		<br />
			  	</Link>
			  })
			}  
			  </div>
			  
			</div>
		 );
    }
}

export default Article;
