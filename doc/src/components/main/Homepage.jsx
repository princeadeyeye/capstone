import React, { Component } from 'react';
import './Navigation.css'
import {signin} from '../auth/api-auth';
import auth from '../auth/auth-helper';
import { Redirect } from 'react-router-dom'

class Homepage extends Component {
 
state = {
	email: '',
    password: '',
    error: '',
    redirectToReferrer: false,
    userId: '',
    defaultPage: true
}

init = () => {
	if(auth.isAuthenticated()) {
		this.setState({ defaultPage: false})
	} else {
		this.setState({ defaultPage: true})
	}
}
componentWillReceiveProps = () => {
	this.init();
}
componentDidMount = () => {
	this.init();
}
clickSubmit = (event) => {
	const user = {
		email: this.state.email || undefined,
		password: this.state.password || undefined
	}

	signin(user)
		.then(({data}) => {
			if(data.error) {
				this.setState({ error: data.error})
			} else {
				auth.authenticate(data, () => {
					this.setState({ redirectToReferrer: true, userId: data.userId})
				})
			}
		})
		event.preventDefault();
}

handleChange = name => event => {
	this.setState({[name]: event.target.value})
}
    render() {
  		const {userId} = this.state
  		 const {redirectToReferrer} = this.state
		    if (redirectToReferrer) {
		      return (<Redirect to={"/profile/" + userId}/>)
		    }
        return (
		    <div id="lp-register">
		    	<div class="container wrapper">
		        <div class="row">
		        	<div class="col-sm-5">
		            <div class="intro-texts">
		            	<h1 class="text-white">TeamWork !!!</h1>
		            	<p>Teamwork is an internal social network for employees of an organization. The goal of this
		application is to facilitate more interaction between colleagues and promote team bonding.</p>
		              
		            </div>
		          </div>
		        	<div class="col-sm-6 col-sm-offset-1">
		            <div> 
		               <section id="banner">
		                  <div class="container">
		                    <div class="sign-up-form">
		                      <h2 class="text-white">Login </h2>
		                      <div class="line-divider"></div>
		                      <div class="form-wrapper">
		                        <p class="signup-text">Signin your account to read and share articles <br /> Learn and Relearn
		                        </p>
		                        <form action="#">
		                          <fieldset class="form-group">
		                            <input 
		                            	type="email" 
		                            	class="form-control" 
		                            	id="example-email" 
		                            	placeholder="Email" 
		                            	name="email" 
        					            value={this.state.email}
        					            onChange={this.handleChange('email')}
		                            	/>
		                          </fieldset>
		                          <fieldset class="form-group">
		                            <input 
		                            	type="password" 
		                            	class="form-control" 
		                            	id="example-password" 
		                            	placeholder="Password"
        					            value={this.state.password}
        					            onChange={this.handleChange('password')}
		                            	 />
		                          </fieldset>
		                        </form>
		                        { this.state.error && (<div class="alert alert-danger" role="alert">
		                        	{this.state.error} </div>) }
		                        <button 
		                        class="btn-secondary"
		                        onClick={this.clickSubmit}
		                        >Signin</button>
		                      </div>
		                    </div>
		                  </div>
		               </section>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>

        );
    }
}

export default Homepage;
