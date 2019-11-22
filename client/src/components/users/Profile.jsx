import React, { Component } from 'react';

class Profile extends Component {
  
    render() {
        return (
            <div class="background">
<div class="profile-card">
  <div class="cover"></div>
  <div class="profile">
    <div class="pic"></div>
    <div class="above-fold">
      <div class="name">
        Douwe de Vries
      </div>
      <div class="role">
        UX Engineer
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>Gouda, the Netherlands
      </div>
      <div class="row">
        <div class="button">
          FOLLOW
        </div>
        <div class="button">
          MESSAGE
        </div>
      </div>
    </div>
    <div class="below-fold">
      <div class="about">
        <h3>
          About
        </h3>
        <p>
          Hi, I am Douwe de Vries, 28 summers young and I am passionate about User Experiences, Design, Front-end development and game development. Like to talk about any of these things? Shoot me a message!
        </p>
      </div>
      <div class="row stats">
        <div class="stat">
          <label>Posts</label>
          <div class="num">
            956
          </div>
        </div>
        <div class="stat">
          <label>Followers</label>
          <div class="num">
            312
          </div>
        </div>
        <div class="stat">
          <label>Following</label>
          <div class="num">
            104
          </div>
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
