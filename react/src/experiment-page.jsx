import React, { Component } from 'react';
import CodeMirror from 'react-codemirror2';
import CountDownTimer from './count-down-timer';
import set from 'lodash/set';
import isEmpty from 'lodash/isEmpty';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import * as UserService from './user-service';

class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "",
      currentQuestionNum: 0,
      user: {}
    };
  };

  componentDidMount() {
    UserService.getUser().then(function(user){
      this.setState({user});
    }.bind(this))
  };


  getCode() {
    let question = this.getCurrentQuestion();
    return question.code;
  }

  getCurrentQuestion(){
    let testPlan = this.getTestPlan();
    let defaultCurrentQuestion = {
      code: null,
      timeForQuestion: null
    };
    let currentQuestion = testPlan[this.getCurrentQuestionNum()];
    if(isEmpty(currentQuestion)){
      currentQuestion = defaultCurrentQuestion;
    }
    return currentQuestion;
  }

  getTestPlan(){
    let testPlan = [];
    if(!isEmpty(this.getUser())){
      testPlan = this.getUser().testPlan;
    }
    return testPlan;
  }

  getUser(){
    return this.state.user;
  }

  getStartTime() {
    let question = this.getCurrentQuestion();
    return question.timeForQuestion;
  }

  handleChange(field, event) {
    let value = event.target.value;
    if(event.target.type=="checkbox"){
      value = event.target.checked;
    }
    set(this.state, field, value);
    this.setState(this.state);
  };

  render() {
    let options = {
      // lineNumbers: true,
      readOnly: true
    };
    return(
      <div>
        <div>ExperimentPage</div>
        <div className="leftScreen">
          <CodeMirror value={this.getCode()} options={options}/>
        </div>
        <div className="clock">
          <CountDownTimer startTime={this.getStartTime()} timeIsOver={this.timeIsOver.bind(this)}/>
        </div>
        <div className="rightScreen">
          <div>
            Remember: 'print()' prints the output without spaces or new line.
            Type here your answer, press the relevant button below when you finish.
          </div>
          <div>
            <textarea autoFocus value={this.state.value} onChange={this.handleChange.bind(this, 'userAnswer')} />
          </div>
          <div onClick={this.onThinkIMadeItClicked.bind(this)}>Think I made it!</div>
          <div onClick={this.onSkipClicked.bind(this)}>Skip</div>
          <div>Question number {this.getCurrentQuestionNum() + 1} out of {this.getTotalNumberOfQuestions()} questions</div>
        </div>
      </div>
    );
  }

  timeIsOver() {
    console.log('timeIsOver');
  }

  getCurrentQuestionNum() {
    return this.state.currentQuestionNum;
  }

  getTotalNumberOfQuestions() {
    return this.getTestPlan().length;
  }

  onThinkIMadeItClicked() {
    this.increaseCurrentQuestionNum();
  }

  onSkipClicked() {
    this.increaseCurrentQuestionNum();
  }

  increaseCurrentQuestionNum() {
    let currentQuestionNum = this.state.currentQuestionNum + 1;
    this.setState({currentQuestionNum});
  }
}

export default ExperimentPage;
