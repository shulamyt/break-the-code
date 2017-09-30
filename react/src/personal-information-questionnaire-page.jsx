import React, { Component } from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import * as UserService from './user-service';
import CheckboxList from 'react-checkbox-list';
import './personal-information-questionnaire-page.scss';

class PersonalInformationQuestionnairePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{
        age: "",
        gender: "",
        degree: {
          selfTaught: false,
          BA: {
            started:  "",
            studied:  "",
            finished: false
          },
          MA: {
            started:  "",
            studied:  "",
            finished: false
          },
          PhD: {
            started:  "",
            studied:  "",
            finished: false
          },
        },
        programmingLanguages: [],
        assessProgrammingSkills: "",
        yearsOfExperience: "",
        notFirstTime:true
      }
    };
  };

  render() {
    let user = this.state.user;
    return (
      <div className="personalInformationQuestionnairePage container">
        <form>
          <div className="form-group">
            <label>Age:<input className="form-control" type="text" value={user.age} onChange={this.handleChange.bind(this, 'user.age')} /></label>
          </div>
          <div className="form-group">
            <label>
              Gender:
              <select className="form-control" value={user.gender} onChange={this.handleChange.bind(this, 'user.gender')}>
                <option value=""/>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div>
            <div>How did you learn to program:</div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value={user.degree.selfTaught}
                onChange={this.handleChange.bind(this, 'user.degree.selfTaught')} />
                Self taught
              </label>
            </div>
            <div className="degreeDetails">
              <div>BSc/BA:</div>
              <label>
                started in
                {this.createSelectRange('user.degree.BA.started', 1980, 2020)}
              </label>
              <label>
                studied for
                {this.createSelectRange('user.degree.BA.studied', 0, 10)}
                years
              </label>
              <label>
                finished
                <input type="checkbox" value={user.degree.BA.finished} onChange={this.handleChange.bind(this,
                'user.degree.BA.finished')} />
              </label>
            </div>
            <div className="degreeDetails">
              <div>MSc/MA:</div>
              <label>
                started in
                {this.createSelectRange('user.degree.MA.started', 1980, 2020)}
              </label>
              <label>
                studied for
                {this.createSelectRange('user.degree.MA.studied', 0, 10)}
                years
              </label>
              <label>
                finished
                <input type="checkbox" value={user.degree.MA.finished} onChange={this.handleChange.bind(this,
                'user.degree.MA.finished')} />
              </label>
            </div>
            <div className="degreeDetails">
              <div>PhD:</div>
              <label>
                started in
                {this.createSelectRange('user.degree.PhD.started', 1980, 2020)}
              </label>
              <label>
                studied for
                {this.createSelectRange('user.degree.PhD.studied', 0, 10)}
                years
              </label>
              <label>
                finished
                <input type="checkbox" value={user.degree.PhD.finished} onChange={this.handleChange.bind(this,
                'user.degree.PhD.finished')} />
              </label>
            </div>
          </div>
          <div>
            <label>
              With which programming languages do you have a good familiarity:
              {this.createProgrammingLanguagesList()}
            </label>
          </div>
          <div>
            <label>
              How do you assess your programming skills?
              {this.createAssessProgrammingSkills()}
            </label>
          </div>
          <div>
            <label>
              How many years work experience do you have in programming?
              {this.createSelectRange('user.yearsOfExperience', 0, 20)}
            </label>
          </div>
          <div>
            <label>
              I was already part in this experiment before
              <input type="checkbox" value={user.notFirstTime} onChange={this.handleChange.bind(this, 'user.notFirstTime')} />
            </label>
          </div>
        </form>
        <button type="button" className="btn btn-primary"  onClick={this.onContinueClicked.bind(this)}>Continue</button>
      </div>
    );
  };

  handleChange(field, event) {
    let value = event.target.value;
    if(event.target.type=="checkbox"){
      value = event.target.checked;
    }
    set(this.state, field, value);
    this.setState(this.state);
  };

  createSelectRange(fieldSrt, from, to) {
    let years = [];
    years.push(<option key="emptyValue" value=""/>);
    for (let i = from; i <= to; i++) {
      years.push(<option key={i} value={i}>{i}</option>);
    }
    return (
      <select value={get(this.state, fieldSrt)} onChange={this.handleChange.bind(this, fieldSrt)}>
        {years}
      </select>
    );
  };

  createProgrammingLanguagesList() {
    let programmingLanguages = [
      'C', 'C ++', 'C#', 'java', 'JavaScript', 'python',
      'perl', 'PHP', 'Fortran', '.NET', 'SQL', 'Ruby',
      'Matlab', 'Scala', 'Haskell'
    ];
    let defaultData = programmingLanguages.map(function(programmingLanguage){
      return({value: programmingLanguage, label: programmingLanguage});
    });
    return (<CheckboxList defaultData={defaultData} onChange={this.handleProgrammingLanguagesListChange.bind(this)} />);
  };

  handleProgrammingLanguagesListChange(values) {
    set(this.state, 'user.programmingLanguages', values);
    this.setState(this.state);
  };


  createAssessProgrammingSkills() {
    return(
      <div onChange={this.handleChange.bind(this, 'user.assessProgrammingSkills')}>
        <input type="radio" value="0" name="assessProgrammingSkills"/> 0 (novice)
        <input type="radio" value="1" name="assessProgrammingSkills"/> 1
        <input type="radio" value="2" name="assessProgrammingSkills"/> 2
        <input type="radio" value="3" name="assessProgrammingSkills"/> 3
        <input type="radio" value="4" name="assessProgrammingSkills"/> 4
        <input type="radio" value="5" name="assessProgrammingSkills"/> 5 (expert)
      </div>
    );
  }

  getUser(){
    return this.state.user;
  }

  onContinueClicked() {
    UserService.updateUserData(this.getUser());
    this.props.history.push('/explain');
  }
}

export default PersonalInformationQuestionnairePage;

