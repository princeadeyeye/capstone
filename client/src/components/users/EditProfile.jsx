import React, { Component, PropTypes } from 'react';

class EditProfile extends Component {
  
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

clickSubmit = (event) => {
	const user = {
		firstName: this.state.firstName,
	    lastName: this.state.lastName,
	    email: this.state.email,
	    password: this.state.password,
	    jobRole: this.state.jobRole,
	    department: this.state.department,
	    address: this.state.address
	}
event.preventDefault()
    const jwt = auth.isAuthenticated()
    createUser({t:jwt.token}, user)
    	.then(({data}) => {
      if (data.error) {
        this.setState({ error: data.error})
      } else {
	console.log(data)
        this.setState({ error: '', open: true })
       
      }
    })
  }

	

    render() {
    
        return (
        			<div className="agile">
						<div className="signin-form profile">
							<h3>Register</h3>
							
							<div className="login-form">
								<form>
									<input type="text" placeholder="First Name" required="" value={this.state.firstName} onChange={this.handleChange('firstName')} />
									<input type="text" placeholder="Last Name" required="" value={this.state.lastName} onChange={this.handleChange('lastName')} />
									<input type="text" placeholder="E-mail" required="" value={this.state.email} onChange={this.handleChange('email')} />
									<input type="password" placeholder="Password" required="" value={this.state.password} onChange={this.handleChange('password')} />
									<input type="text" placeholder="Department" required="" value={this.state.jobRole} onChange={this.handleChange('jobRole')} />
									<input type="text" placeholder="Role" required="" value={this.state.department} onChange={this.handleChange('department')} />
									<input type="text" placeholder="Address" required="" value={this.state.address} onChange={this.handleChange('address')} />
									<input type="submit" onClick={this.clickSubmit} />
									{ this.state.open && (<div className="alert alert-success" role="alert"> Account created successfully </div>)}

								</form>
							</div>
							<p><a href="/signin">Have an account? Please, sign in.</a></p>
						</div>
		</div>
        );
    }
}

export default EditProfile;
