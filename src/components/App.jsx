/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import Splash from './Splash';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
/* eslint-enable */

function App() {

  return (

    <div class='container'>
      <Header/>
      <switch>
        <Route exact path='/' component={Splash}/>
        <Route exact path='/about' component={AboutUs}/>
      </switch>
    </div>

  );
}

export default App;
