import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import WelcomePage from './welcome-page';
import PersonalInformationQuestionnairePage from './personal-information-questionnaire-page';
import ExplainPage from './explain-page';
import ExperimentPage from './experiment-page';
import EndPage from './end-page';
import * as UserService from './user-service';


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
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount(){
    UserService.getUser().then((user)=>{
      this.setState({mode: user.mode});
    });
  }

  render() {
    return(
      <div className={this.state.mode}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
