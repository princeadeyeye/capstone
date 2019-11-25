import React, { Component } from 'react';
import auth from '../auth/auth-helper'
import {read} from './api-users'
import {Link} from 'react-router-dom'

class Profile extends Component {

  constructor({match}) {
    super()
    this.state = {
      user: {},
      redirectToSignin: false,
      feed:[]
    }
    this.match = match
  }

  init = (id) => {
    const jwt = auth.isAuthenticated()
    read({
      id
    }, {t:jwt.token}).then(({data}) => {
      if (data.error) {
        this.setState({ redirectToSignin: true})
        console.log(data)
      } else {
        this.setState({ user: data})
       
      }
    })
  }

componentWillReceiveProps = (props) => {
    this.init(props.match.params.id)
  }
  componentDidMount = () => {
    this.init(this.match.params.id)
  }
  
    render() {
      const {user} = this.state
        return (
          <div className='container mt-5 text-white'>
            <div className="col jumbotron bg-primary">
              <h1 className="display-4 text-uppercase"> {user.firstName} {user.lastName}</h1>
              <button type="button" className="btn btn-primary" aria-label="right Align">
                <i className="fa fa-edit"></i>
              </button>
              <p className="lead text-white">Email: {user.email}</p>
              <p className="lead text-white">Role: {user.jobRole}</p>
              <p className="lead text-white">Department: {user.department}</p>
              <p className="lead text-white">Address: {user.address}</p>
              <hr className="my-4" />
               
             { 
              (user.jobRole === 'admin') &&
            ( <div className='row '>
                <Link className="m-auto btn btn-primary btn-lg text-uppercase" to="/register" role="button">Add Employee</Link>
                </div>)}
            <div className='row '>
                <a className="m-auto btn btn-primary btn-lg text-uppercase" href="/" role="button">Feed</a>
                </div>
            </div>
          </div>
        );
    }
}

export default Profile;
