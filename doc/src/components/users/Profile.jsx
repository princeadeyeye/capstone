import React, { Component } from 'react';
import auth from '../auth/auth-helper'
import {read} from './api-users'
import Feed from '../articles/Feed'
import TimelineCover from './TimelineCover'

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
      } else {
                console.log(data)

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
            <div class="container">
              <div class="timeline">
               <TimelineCover user = {user} />
                <div id="page-contents">
                  <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-7">
                    <Feed />
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

export default Profile;
