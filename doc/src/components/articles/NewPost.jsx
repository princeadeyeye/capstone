import React, { Component } from 'react';
import {create} from './api-article';
import auth from '../auth/auth-helper';
import moment from 'moment'
import { createGif } from '../gifs/api-gifs'


class NewPost extends Component {
	state = {
		title: '',
	    article: '',
	    userid: '',
	    createdOn: moment(new Date()),
	    photo: null,
	    error: ''
	  }

	  componentDidMount = () => {
	    this.postGif = new FormData()
	    this.setState({userid: auth.isAuthenticated().userId})
	  }

	  clickPost = () => {
	  		const articlepost = {
			    title: this.state.title,
			    article: this.state.article,
			    userid: this.state.userid,
			    createdOn: this.state.createdOn,
	
			}

	    const jwt = auth.isAuthenticated()
	    create( {t: jwt.token}, articlepost).then(({data}) => {
	      if (data.error) {
	        this.setState({error: data.error})
	      } else {
	        this.setState({	title: '',
						    article: '',
						    userid: '',
						    createdOn: '',
						    error: ''
						})
	        this.props.addPost(data)
	      }
	    })
	  }

	 sendGif = () => {
	    const jwt = auth.isAuthenticated()
	    createGif( {t: jwt.token}, this.postGif).then((data) => {
	      if (data.error) {
	        this.setState({error: data.error})
	      } else {
	        this.setState({	title: '',
						    article: '',
						    userid: '',
						    createdOn: '',
						    photo: '',
						    error: ''
						})
	        this.props.addgif(data)
	      }
	    })
	  }

	  handleChange = name => event => {
	    const value = name === 'photo'
	      ? event.target.files[0]
	      : event.target.value
	      console.log(value, this.state.userid)
	    this.postGif.set(name, value)
	    this.postGif.append("photo", value);
	    this.postGif.append('userid', this.state.userid);
	    console.log(this.postGif)
	    this.setState({ [name]: value })
	  }

    render() {
        return (

        	 <div class="create-post">
	                <div class="row">
	                	<div class="col-md-10">
	                		<input 
								className="form-control form-control-sm" 
								type="text" 
								placeholder="title" 
								value={this.state.title}
					         	onChange={this.handleChange('title')}
							/>
	                	</div>
	                </div>
	              <div class="row">
                   <div class="col-md-10">
                            <div class="form-group">
                              <img src={require ("../../images/face.jpg")} alt="" class="profile-photo-md" />
	                            <textarea 
	                            	name="article" 
	                            	id="exampleTextarea" 
	                            	cols="30" rows="5" 
	                            	class="form-control" 
	                            	placeholder="Write what you wish"
	                            	value={this.state.article}
	            		 	 		onChange={this.handleChange('article')}

	                              >
	                             </textarea>
	                            
                            </div>
                          </div>
                        </div>
                          <div class="row">
		                	<div class="col-md-10 col-sm-3">
		                		  <input 
		                                class="form-control btn btn-primary" 
		                                type="file" 
								    	accept="image/*"
								    	onChange={this.handleChange('photo')}
	                                />
		                	</div>
                        </div>
                        <div class='row'>
                          <div class="col-md-5 col-sm-5">
                            <div class="tools">
                              <ul class="publishing-tools">
	                             <button 
	                              class="btn btn-primary"
	                                disabled={this.state.photo === null}
				          			onClick={this.sendGif}
	                              >upload</button>
                              </ul>
                              <button 
                              class="btn btn-primary"
                               disabled={this.state.article === ''}
				          		onClick={this.clickPost}
                              >Publish</button>
                        </div>
                     </div>
                </div>
            </div>
      	
     	);
    }
}

export default NewPost;
