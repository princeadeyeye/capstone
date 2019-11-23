import React, { Component } from 'react';
import './Signin.css'
import {signin} from './api-auth';
import auth from './auth-helper';
import { Redirect } from 'react-router-dom'

class Signin extends Component {
	state = {
	email: '',
    password: '',
    error: '',
    redirectToReferrer: false
}

clickSubmit = (event) => {
	const user = {
		email: this.state.email || undefined,
		password: this.state.password || undefined
	}

	signin(user)
		.then((data) => {
			if(data.error) {
				console.log(data.error)
				this.setState({ error: data.error})
			} else {
				console.log(data)
				auth.authenticate(data, () => {
					this.setState({ redirectToReferrer: true})
				})
			}
		})
		event.preventDefault()
}

handleChange = name => event => {
	this.setState({[name]: event.target.value})

}
    render() {
    	const {from} = this.props.location.state || {
		      from: {
		        pathname: '/'
		      }
		    }
		    const {redirectToReferrer} = this.state
		    if (redirectToReferrer) {
		      return (<Redirect to={from}/>)
		    }
    
        return (
           
			    <div className="container">
			        <div className="row">
			            <div className="col-lg-3 col-md-2"></div>
			            <div className="col-lg-6 col-md-8 login-box">
			                <div className="col-lg-12 login-key">
			                    <i className="fa fa-key" aria-hidden="true"></i>
			                </div>
			                <div className="col-lg-12 login-title">
			                     LOGIN
			                </div>

			                <div className="col-lg-12 login-form">
			                    <div className="col-lg-12 login-form">
			                        <form>
			                            <div className="form-group">
			                                <label className="form-control-label">USERNAME</label>
			                                <input 
			                                type="text" 
			                                className="form-control" 
			                                 value={this.state.email}
			                                onChange={this.handleChange('email')}
			                                />
			                            </div>
			                            <div className="form-group">
			                                <label className="form-control-label">PASSWORD</label>
			                                <input 
			                                type="password" 
			                                className="form-control"  
			                                value={this.state.password}
			                                onChange={this.handleChange('password')}
			                                />
			                            </div>
			                            	   { this.state.error &&
			                            	(<div class="alert alert-danger" role="alert">
			                            	 	{this.state.error}
			                            	</div>)
			                            }
			                            <div className="col-lg-12 loginbttm">
			                                <div className="col-lg-6 login-btm login-text">
			                                </div>
			                                <div className="col-lg-6 login-btm login-button">
			                                    <button 
			                                    type="submit" 
			                                    className="btn btn-outline-primary"
			                                    onClick={this.clickSubmit}
			                                    >LOGIN</button>
			                                </div>
			                            </div>
			                
			                        </form>
			                    </div>
			                </div>
			                <div className="col-lg-3 col-md-2"></div>
			            </div>
			        </div>
			      </div>
        );
    }
}

export default Signin;
