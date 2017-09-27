import React, { Component } from 'react';
import CodeMirror from 'react-codemirror2';
import CountDownTimer from './count-down-timer';
import set from 'lodash/set';
import isEmpty from 'lodash/isEmpty';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import * as UserService from './user-service';
import * as RestService from './rest-utilities';

class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "",
      currentQuestionNum: 0,
      user: {}
    };
  };

  takeTime(){
    return window.performance ? window.performance.now() : new Date().getTime();
  }

  componentDidMount() {
    UserService.getUser().then(function(user){
      this.startAt = this.takeTime();
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
    let currentQuestion = defaultCurrentQuestion;
    if(!isEmpty(testPlan) && !isEmpty(testPlan[this.getCurrentQuestionNum()])) {
      currentQuestion = testPlan[this.getCurrentQuestionNum()];
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

  getQuestionDuration() {
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
          <CountDownTimer startTime={this.getQuestionDuration()} timeIsOver={this.timeIsOver.bind(this)}/>
        </div>
        <div className="rightScreen">
          <div>
            Remember: 'print()' prints the output without spaces or new line.
            Type here your answer, press the relevant button below when you finish.
          </div>
          <div>
            <textarea autoFocus value={this.state.userAnswer} onChange={this.handleChange.bind(this, 'userAnswer')} />
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
    this.endAt = this.takeTime();
    this.postAnswer();
    this.continueToNextQuestion();
  }

  onSkipClicked() {
    this.endAt = this.takeTime();
    this.postAnswer(true);
    this.continueToNextQuestion();
  }

  getRightAnswer(){
    let currentQuestion = this.getCurrentQuestion();
    return currentQuestion.answer;
  }

  postAnswer(skip) {
    let currentQuestion = this.getCurrentQuestion();
    let user = this.getUser();
    let answer = {};
    answer.questionId = currentQuestion.id;
    answer.rightAnswer = this.getRightAnswer();
    answer.time = this.endAt - this.startAt;
    answer.userAnswer = this.state.userAnswer;
    answer.userId = user.id;
    answer.skip = isEmpty(skip) ? false : skip;
    answer.questionIndex = this.getCurrentQuestionNum();
    RestService.post('services/answer',answer);
  }

  continueToNextQuestion() {
    if(this.hasMoreQuestions()) {
      let currentQuestionNum = this.getCurrentQuestionNum() + 1;
      this.startAt = this.takeTime();
      this.setState({currentQuestionNum, userAnswer: ""});
    }else{
      this.endOfExperiment();
    }
  }

  hasMoreQuestions() {
    let testPlan = this.getTestPlan();
    let currentQuestionNum = this.getCurrentQuestionNum();
    return (testPlan.length - 1) > currentQuestionNum;
  }

  endOfExperiment() {
    this.props.history.push('/summary');
  }
}

export default ExperimentPage;
