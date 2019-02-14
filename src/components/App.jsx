/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import Splash from './Splash';
import { Switch, Route } from 'react-router-dom';
/* eslint-enable */

function App() {

  return (

    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={Splash}/>
      </switch>
    </div>

  );
}

export default App;
