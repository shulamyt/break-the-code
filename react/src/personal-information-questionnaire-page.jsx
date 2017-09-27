import React, { Component } from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import CheckboxList from 'react-checkbox-list';

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
            finished: ""
          },
          MA: {
            started:  "",
            studied:  "",
            finished: ""
          },
          PhD: {
            started:  "",
            studied:  "",
            finished: ""
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
      <div className="">
        <div className="form">
          <div>
            <label>Age:<input type="text" value={user.age} onChange={this.handleChange.bind(this, 'user.age')} /></label>
            <label>
              Gender:
              <select value={user.gender} onChange={this.handleChange.bind(this, 'user.gender')}>
                <option value=""/>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div>
            <div>How did you learn to program:</div>
            <label>Self taught<input type="checkbox" value={user.degree.selfTaught} onChange={this.handleChange.bind(this, 'user.degree.selfTaught')} /></label>
            <div>BSc/BA:
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
                and finished in
                {this.createSelectRange('user.degree.BA.finished', 1980, 2020)}
              </label>
            </div>
            <div>MSc/MA:
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
                and finished in
                {this.createSelectRange('user.degree.MA.finished', 1980, 2020)}
              </label>
            </div>
            <div>PhD:
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
                and finished in
                {this.createSelectRange('user.degree.PhD.finished', 1980, 2020)}
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
              With which programming languages do you have a good familiarity:
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
        </div>
        <div onClick={this.onContinueClicked.bind(this)}>Continue</div>
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

  onContinueClicked() {
    this.props.history.push('/explain');
  }
}

export default PersonalInformationQuestionnairePage;
