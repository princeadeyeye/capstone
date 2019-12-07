import React, { Component } from 'react';
import auth from '../auth/auth-helper'
import {read, update} from './api-users'
import { Redirect} from 'react-router-dom'
import TimelineCover from './TimelineCover'


class EditProfile extends Component {
  
   constructor({match}) {
	        super();
	        this.state = {
	        	user:{},
	        	redirectToProfile: false,
	        	error:'',
	        	loading: true

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
		        this.setState({	loading: false,
		        				user: data,
		        			})
		      }
		    })
  }
handleChange = name => event => {
	this.setState({ [name] : event.target.value })
}

clickSubmit = (event) => {
	const {user} = this.state
	const data = {
		firstName: user.firstName || undefined,
	    lastName: user.lastName || undefined,
	    email: user.email || undefined,
	    password: user.password || undefined,
	    jobRole: user.jobRole || undefined,
	    department: user.department || undefined,
	    address: user.address || undefined
	}
event.preventDefault()
    const jwt = auth.isAuthenticated()
    update(
    	{id: this.match.params.id},
    	{t:jwt.token}, data)
    	.then(({data}) => {
      if (data.error) {
        this.setState({ error: data.error})
      } else {
	console.log(data)
        this.setState({redirectToProfile: true })
       
      }
    })
  }

	

    render() {
    	   const {user} = this.state
    	   const {loading} = this.state
    	   const {redirectToProfile} = this.state
    	if(loading) {
    		return ( 
				    <div id="spinner-wrapper">
				      <div class="spinner"></div>
				    </div>
    )
    	}
    	if (redirectToProfile) {
      return (<Redirect to={'/profile/' + user.id}/>)
    }
 
        return (
        	<div class="container">
              <div class="timeline">
               <TimelineCover user = {user} />
                <div id="page-contents">
                  <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-7">
		              <div class="edit-profile-container">
		                <div class="block-title">
		                  <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Edit basic information</h4>
		                  <div class="line"></div>
		                  <div class="line"></div>
		                </div>
		                <div class="edit-block">
		                  <form name="basic-info" id="basic-info" class="form-inline">
		                    <div class="row">
		                      <div class="form-group col-xs-6">
		                        <label for="firstname">First name</label>
		                        <input id="firstname" class="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" value={user.firstName} onChange={this.handleChange('firstName')} />
		                      </div>
		                      <div class="form-group col-xs-6">
		                        <label for="lastname" class="">Last name</label>
		                        <input id="lastname" class="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" value={user.lastName} onChange={this.handleChange('lastName')} />
		                      </div>
		                    </div>
		                    <div class="row">
		                      <div class="form-group col-xs-12">
		                        <label for="email">My email</label>
		                        <input id="email" class="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder=" Email" value={user.email} onChange={this.handleChange('email')} />
		                      </div>
		                    </div>
		                     <div class="row">
		                      <div class="form-group col-xs-12">
		                        <label for="password">Password</label>
		                        <input id="password" class="form-control input-group-lg" type="password" name="Password" title="Enter Password" placeholder=" Password" value={user.password} onChange={this.handleChange('password')} />
		                      </div>
		                    </div>
		                     <div class="row">
		                      <div class="form-group col-xs-12">
		                        <label for="jobrole">Job Role</label>
		                        <input id="jobrole" class="form-control input-group-lg" type="text" name="Role" title="Enter Role" placeholder="My Role" value={user.jobRole} onChange={this.handleChange('jobRole')} />
		                      </div>
		                    </div>
		                     <div class="row">
		                      <div class="form-group col-xs-12">
		                        <label for="department">Department</label>
		                        <input id="department" class="form-control input-group-lg" type="text" name="Department" title="Enter Department" placeholder=" Department" value={user.department} onChange={this.handleChange('department')} />
		                      </div>
		                    </div>
		                     <div class="row">
		                      <div class="form-group col-xs-12">
		                        <label for="address">Address</label>
		                        <input id="address" class="form-control input-group-lg" type="text" name="Address" title="Enter Address" placeholder=" Address" value={user.address} onChange={this.handleChange('address')}  />
		                      </div>
		                    </div>
		                    <button class="btn btn-primary" onClick={this.clickSubmit} >Save Changes</button>
		                  </form>
		                </div>
		              </div>
                    </div>
                    <div class="col-md-2 static">
                      <div id="sticky-sidebar">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        		
        );
    }
}

export default EditProfile;
