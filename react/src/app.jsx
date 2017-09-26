import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import WelcomePage from './welcome-page';
import PersonalInformationQuestionnairePage from './personal-information-questionnaire-page';

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: WelcomePage
  // },
  {
    path: '/',
    exact: true,
    component: PersonalInformationQuestionnairePage
  },
  {
    path: '/personalInformationQuestionnaire',
    component: PersonalInformationQuestionnairePage
  },
  {
    path: '/explain',
    component: PersonalInformationQuestionnairePage
  }
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
