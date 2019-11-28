import React, { Component } from 'react';
import auth from '../auth/auth-helper'
import {read, update} from './api-users'
import { Redirect} from 'react-router-dom'

class EditProfile extends Component {
  
   constructor({match}) {
	        super();
	        this.state = {
	        	firstName: '',
	        	lastName: '',
	        	email: '',
	        	password:'',
	        	jobRole: '',
	        	department: '',
	        	address:'',
	        	redirectToProfile: false,
	        	error:''

	        }
	        this.match = match
	    }

	    componentDidMount = () => {
		    const jwt = auth.isAuthenticated()
		    read({
		      id: this.match.params.id
		    }, {t: jwt.token}).then(({data}) => {
		      if (data.error) {
		        this.setState({error: data.error})
		      } else {
		      	console.log(data)
		        this.setState({	id: data.userId, 
		        				firstName: data.firstName, 
		        				lastName: data.lastName, 
		        				password: data.password,
		        				email: data.email, 
		        				jobRole: data.jobRole,
		        				department: data.department,
		        				address:data.address
		        			})
		      }
		    })
  }
handleChange = name => event => {
	this.setState({ [name] : event.target.value })
}

clickSubmit = (event) => {
	const user = {
		firstName: this.state.firstName || undefined,
	    lastName: this.state.lastName || undefined,
	    email: this.state.email || undefined,
	    password: this.state.password || undefined,
	    jobRole: this.state.jobRole || undefined,
	    department: this.state.department || undefined,
	    address: this.state.address || undefined
	}
event.preventDefault()
    const jwt = auth.isAuthenticated()
    update(
    	{id: this.match.params.id},
    	{t:jwt.token}, user)
    	.then(({data}) => {
      if (data.error || data===undefined) {
        this.setState({ error: data.error})
      } else {
	console.log(data)
        this.setState({redirectToProfile: true })
       
      }
    })
  }

	

    render() {
    	if (this.state.redirectToProfile) {
      return (<Redirect to={'/user/' + this.state.userid}/>)
    }
    
        return (
        			<div className="agile">
						<div className="signin-form profile">
							<h3>Update</h3>
							
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
								</form>
							</div>
						</div>
		</div>
        );
    }
}

export default EditProfile;
