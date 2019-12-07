import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class TimelineCover extends Component {


    render() {
    	const {user} = this.props
        return (
             <div class="timeline-cover">
                  <div class="timeline-nav-bar hidden-sm hidden-xs">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="profile-info">
                          <img src={require ("../../images/face.jpg")} alt="" class="img-responsive profile-photo" />
                          <h3>{user.firstName} {user.lastName}</h3>
                          <p class="text-muted">{user.jobRole}/{user.department}</p>
                          <p>{user.email}</p>
                          <p>{user.address}</p>
                        </div>
                      </div>
                      <div class="col-md-9 timeline-btn">
                        <ul class="follow-me list-inline">
                          <li><Link to={"/profile/edit/" + user.userId} class="btn-primary">Edit Profile</Link></li>
                           <li><Link to="/register" class="btn-primary">Add Employee</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="navbar-mobile hidden-lg hidden-md">
                    <div class="profile-info">
                      <img src={require ("../../images/face.jpg")} alt="A" class="img-responsive profile-photo" />
                      <h4>{user.firstName} {user.lastName}</h4>
                      <p class="text-muted">{user.jobRole}/{user.department}</p>
                      <p class="text-muted">{user.email}</p>
                      <p class="text-muted">{user.address}</p>
                    </div>
                    <div class="mobile-menu">
                      <button class="btn-primary">Register Employee</button>
                    </div>
                  </div>

                </div>
        );
    }
}

export default TimelineCover;
