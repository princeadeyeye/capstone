import React, { Component } from 'react';
import './Homepage.css'
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
			if(data.error || undefined) {
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
        		<div className="main-bg">
			        <div className="box-conatiner">
			            <div id="a">
			                <div className="circle-ripple"></div>
			            </div>

			            <div className="row">
			                <div className="col-md-6 col-sm-6">
			                    <h1 className="heading-left">TeamWork </h1>
			                </div>
			                <div className="col-sm-6 col-md-6">
			                    <div className="wrap-login100">
			                        <span className="login100-form-title">
			                            Sign In
			                        </span>
			                        <form className="login100-form validate-form p-l-55 p-r-55 p-t-20">
			                           
			                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
			                                <input 
			                                className="input100" 
			                                type="text" name="email" 
			                                placeholder="Email" 
			                                value={this.state.email}
			                                onChange={this.handleChange('email')}
			                                />
			                                <span className="focus-input100"></span>
			                            </div>
			                            <div className="wrap-input100 validate-input" data-validate="Please enter password">
			                                <input className="input100" 
			                                type="password" 
			                                placeholder="Password" 
			                                value={this.state.password}
			                                onChange={this.handleChange('password')}
			                                />
			                                <span className="focus-input100"></span>
			                            </div>
			                            { this.state.error &&
			                            	(<div class="alert alert-danger" role="alert">
			                            	 	{this.state.error}
			                            	</div>)
			                            }
			                            
			                            <br />
			                          
			                            <div className="container-login100-form-btn">
			                                <button 
			                                className="login100-form-btn"
			                                onClick={this.clickSubmit}
			                                >
			                                    Sign in
			                                </button>
			                            </div>
			                            <div className="flex-col-c p-t-110 p-b-40">
			                                <span className="txt1 p-b-9">
			                                    Don’t have an account?
			                                </span>
			                                <a href="/" className="txt3">
			                                    Sign up now
			                                </a>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
            
        );
    }
}

export default Homepage;
