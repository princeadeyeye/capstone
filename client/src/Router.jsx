import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/main/Homepage'
import Navigation from './components/main/Navigation'
import Signin from './components/auth/Signin'
import Register from './components/auth/Register'
{/*import EditProfile from './components/EditProfile'
import Feed from './components/Feed'
import ShowArticle from './components/ShowArticle'
import ShowGif from './components/ShowGif'
import CommentArticle from './components/CommentArticle'
import CommentGif from './components/CommentGif'*/}


class Router extends Component {
  
    render() {
        return (
        	<div>
        		<Navigation />
        		<Switch>
	      			<Route exact path = "/" component = {Homepage} />
	      			<Route exact path = "/signin" component = {Signin} />
	      			<Route exact path = "/register" component = {Register} />
	      			<Route exact path = "/navigation" component = {Navigation} />
	      			<Route exact path = "/signin" component = {Signin} />
	      			{/*<Route exact path = "/" component = {EditProfile} />
	      			<Route exact path = "/" component = {Feed} />
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
