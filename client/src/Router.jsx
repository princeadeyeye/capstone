import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'



import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Signin from './components/Signin'
import Register from './components/Register'
import EditProfile from './components/EditProfile'
import Feed from './components/Feed'
import ShowArticle from './components/ShowArticle'
import ShowGif from './components/ShowGif'
import CommentArticle from './components/CommentArticle'
import CommentGif from './components/CommentGif'


class Router extends Component {
  
    render() {
        return (
        	<div>
        		<Navigation />
        		<Switch>
	      			<Route exact path = "/" component = {Homepage} />
	      			{/*<Route exact path = "/" component = {Signin} />
	      			<Route exact path = "/" component = {Register} />
	      			<Route exact path = "/" component = {EditProfile} />
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
