import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Router from './Router'

require('bootstrap')


const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default hot (module) (App);
