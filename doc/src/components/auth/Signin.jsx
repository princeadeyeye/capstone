import React, { Component } from 'react';
import './Signin.css'
import {signin} from './api-auth';
import auth from './auth-helper';
import { Redirect } from 'react-router-dom'

class Signin extends Component {
	state = {
	email: '',
    password: '',
    userId: '',
    error: '',
    redirectToReferrer: false
}

clickSubmit = (event) => {
	const user = {
		email: this.state.email || undefined,
		password: this.state.password || undefined
	}

	signin(user)
		.then(({data}) => {
			if(data.error || undefined) {
				console.log(data.error)
				this.setState({ error: data.error})
			} else {
				console.log(data)
				auth.authenticate(data, () => {
					this.setState({ redirectToReferrer: true, userId : data.userId})
				})
			}
		})
				event.preventDefault()

}

handleChange = name => event => {
	this.setState({[name]: event.target.value})

}
    render() {
    
		    const {redirectToReferrer} = this.state
		    if (redirectToReferrer) {
		      return (<Redirect to={"/profile/" + this.state.userId}/>)
		    }
    
        return (
           
			   	<div class="w3">
					<div class="signin-form profile">
						<h3>Login</h3>
						
						<div class="login-form">
							<form>
								<input type="text" placeholder="E-mail"  value={this.state.email} onChange={this.handleChange('email')} required="" />
								<input type="password" placeholder="Password" required="" value={this.state.password} onChange={this.handleChange('password')} />
								<div class="tp">
								{ this.state.error && (<div class="alert alert-danger" role="alert"> {this.state.error} </div>)}
									<input type="submit" onClick={this.clickSubmit} />
								</div>
							</form>
						</div>
						<p><a href="/register"> Don't have an account?</a></p>
					</div>
		</div>
        );
    }
}

export default Signin;
