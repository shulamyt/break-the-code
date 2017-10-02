import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import WelcomePage from './welcome-page';
import PersonalInformationQuestionnairePage from './personal-information-questionnaire-page';
import ExplainPage from './explain-page';
import ExperimentPage from './experiment-page';
import EndPage from './end-page';


const routes = [
  {
    path: '/',
    exact: true,
    component: WelcomePage
  },
  {
    path: '/personalInformationQuestionnaire',
    component: PersonalInformationQuestionnairePage
  },
  {
    path: '/explain',
    component: ExplainPage
  },
  {
    path: '/experiment',
    component: ExperimentPage
  },
  {
    path: '/end',
    component: EndPage
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
