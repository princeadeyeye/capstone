import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/main/Homepage'
import Navigation from './components/main/Navigation'
import Footer from './components/main/Footer'
import Signin from './components/auth/Signin'
import Register from './components/auth/Register'
import Article from './components/articles/Article'
import GetArticle from './components/articles/GetArticle'
import Feed from './components/articles/Feed'
import Profile from './components/users/Profile'
import EditProfile from './components/users/EditProfile'
import PrivateRoute from './components/auth/PrivateRoute'


class Router extends Component {
  
    render() {
        return (
        	<div>
        	<Route  path = "/" component = {Navigation} />
        		<Switch>
	      			<Route exact path = "/" component = {Homepage} />
	      			<Route exact path = "/signin" component = {Signin} />
	      			<Route exact path = "/register" component = {Register} />
	      			<Route exact path = "/articles" component = {Article} />
	      			<Route exact path = "/profile/:id" component = {Profile} />
	      			<Route exact path = "/feed" component = {Feed} />
	      			<PrivateRoute exact path="/profile/edit/:id" component={EditProfile}/>
	      			<Route exact path = "/articles/:id" component = {GetArticle} />
	      			{/*<Route exact path = "/" component = {Feed} />
	      			<Route exact path = "/" component = {ShowArticle} />
	      			<Route exact path = "/" component = {ShowGif} />
	      			<Route exact path = "/" component = {CommentArticle} />
	      			<Route exact path = "/" component = {CommentGif} />*/}
      			</Switch>
        	</div>
        );
    }
}

export default Router;
