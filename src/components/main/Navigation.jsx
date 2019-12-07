import React, { Component } from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom'


class Navigation extends Component {
  
    render() {
        return (
		  <header id="header">
      <nav class="navbar navbar-default navbar-fixed-top menu">
        <div class="container">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <NavLink class="navbar-brand" to="/"><img src={require ("../../images/logo.png")} alt="logo" /></NavLink>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown">
                <NavLink to="/" >Home </NavLink>
              </li>
              <li class="dropdown">
                <NavLink to="/feed">Feed </NavLink>
              </li>
              <li class="dropdown">
                <NavLink to="/articles">Articles </NavLink>
              </li>
              <li class="dropdown">
                <NavLink to="/gifs">Gifs </NavLink>
              </li>
              <li class="dropdown"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <form class="navbar-form navbar-right hidden-sm">
              <div class="form-group">
                <i class="icon ion-android-search"></i>
                <input type="text" class="form-control" placeholder="Search Articles" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
        );
    }
}

export default Navigation;
