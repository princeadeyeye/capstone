import React, { Component } from 'react';
import {createUser} from './api-auth';

class Register extends Component {

	    constructor(props) {
	        super(props);
	        this.state = {
	        	firstName: '',
	        	lastName: '',
	        	email: '',
	        	password:'',
	        	jobRole: '',
	        	department: '',
	        	address:'',
	        	open: false,
	        	error:''

	        }
	    }
handleChange = name => event => {
	this.setState({ [name] : event.target.value })
}

clickSubmit = () => {
	const user = {
		firstName: this.state.firstName,
	    lastName: this.state.lastName,
	    email: this.state.email,
	    password: this.state.password,
	    jobRole: this.state.jobRole,
	    department: this.state.department,
	    address: this.state.address
	}

	createUser(user).then((data) => {
		if(data.error) {
			this.setState({ error: data.error})
		} else {
			this.setState({ error: '', open : true })
		}
	})
}

    render() {
    
        return (
        	<div className='card'>
				<div class="container">
				    <div class="col-lg-5 mx-auto mb-1" >
			                  <form action="" method="post" class="form-box">
			                    <h3 class="h4 text-black mb-4">Register </h3>
			                    <div class="form-group">
			                      <input 
			                      type="text" 
			                      className="form-control" 
			                      placeholder="First Name" 
			                      value= {this.state.firstName}
			                      onChange={this.handleChange('firstName')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input type="text" 
			                      className="form-control" 
			                      placeholder="Last Name" 
			                      value= {this.state.lastName}
			                      onChange={this.handleChange('lastName')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="text" 
			                      className="form-control" 
			                      placeholder ="Email" 
			                      value= {this.state.email}
			                      onChange={this.handleChange('email')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="password" 
			                      className="form-control" 
			                      placeholder ="Password" 
			                      value= {this.state.password}
			                      onChange={this.handleChange('password')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="text" 
			                      className="form-control" 
			                      placeholder ="Job Role" 
			                      value= {this.state.jobRole}
			                      onChange={this.handleChange('jobRole')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="text" 
			                      className="form-control" 
			                      placeholder ="Department" 
			                      value= {this.state.department}
			                      onChange={this.handleChange('department')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="text" 
			                      className="form-control" 
			                      placeholder ="Address" 
			                      value= {this.state.address}
			                      onChange={this.handleChange('address')}
			                      />
			                    </div>
			                    <div class="form-group">
			                      <input 
			                      type="submit" 
			                      className="form-control btn btn-primary btn-pill" 
			                      placeholder ="Enter" 
			                      onClick={this.clickSubmit}
			                      />
			                    </div>
			                  </form>
			                
						</div>
    			</div>
    		</div>
        );
    }
}

export default Register;
