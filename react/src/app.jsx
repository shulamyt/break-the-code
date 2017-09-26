import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import WelcomePage from './welcome-page';

const routes = [
  {
    path: '/',
    exact: true,
    component: WelcomePage
  },
  // {
  //   path: '/login',
  //   component: Login
  // },
  // {
  //   path: '/setupList',
  //   component: SetupList
  // },
  // {
  //   path: '/setupConfiguration/:setupId',
  //   component: SetupConfiguration
  // },
  // {
  //   path: '/createNewSetup',
  //   component: CreateNewSetup
  // }
];

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    );
  }
}

export default App;
