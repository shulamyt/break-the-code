import React, { Component } from 'react';
import CodeMirror from 'react-codemirror2';
import CountDownTimer from './count-down-timer';
import set from 'lodash/set';
import isEmpty from 'lodash/isEmpty';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import * as UserService from './user-service';
import * as RestService from './rest-utilities';
import Modal from 'react-modal';
import './experiment-page.scss';

class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.rightAnswersNum = 0;
    this.state = {
      showModal: false,
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
    if(testPlan == undefined){
      testPlan = [];
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
      <div className="experiment-page">
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
          <div className="footer">
            <button type="button" className="btn btn-primary"   onClick={this.onThinkIMadeItClicked.bind(this)}>Think I made it!</button>
            <button type="button" className="btn btn-secondary"   onClick={this.onSkipClicked.bind(this)}>Skip</button>
            <div>Question number {this.getCurrentQuestionNum() + 1} out of {this.getTotalNumberOfQuestions()} questions</div>
          </div>
        </div>
        {this.createQuestionSummaryModal()}
      </div>
    );
  }

  timeIsOver() {
    if(this.getUser().testPlan != undefined){
      this.endAt = this.takeTime();
      this.postAnswer();
      this.setState({showModal: true});
    }
  }

  getCurrentQuestionNum() {
    return this.state.currentQuestionNum;
  }

  getTotalNumberOfQuestions() {
    if (isEmpty(this.getTestPlan())) {
      return 0;
    }
    return this.getTestPlan().length;
  }

  onThinkIMadeItClicked() {
    this.endAt = this.takeTime();
    this.postAnswer();
    this.setState({showModal: true});
  }

  onSkipClicked() {
    this.endAt = this.takeTime();
    this.postAnswer(true);
    if(this.hasMoreQuestions()){
      this.continueToNextQuestion();
    }
    else{
      this.setState({showModal: true});
    }

  }

  getRightAnswer(){
    let currentQuestion = this.getCurrentQuestion();
    return currentQuestion.answer;
  }

  getUserAnswer(){
    return this.state.userAnswer;
  }

  postAnswer(skip) {
    let currentQuestion = this.getCurrentQuestion();
    let user = this.getUser();
    let answer = {};
    answer.questionId = currentQuestion.id;
    answer.rightAnswer = this.getRightAnswer();
    answer.time = this.endAt - this.startAt;
    answer.userAnswer = this.getUserAnswer();
    answer.userId = user.id;
    answer.skip = isEmpty(skip) ? false : skip;
    answer.questionIndex = this.getCurrentQuestionNum();
    RestService.post('services/answer',answer);
  }

  continueToNextQuestion() {
    this.countScore();
    if(this.hasMoreQuestions()) {
      let currentQuestionNum = this.getCurrentQuestionNum() + 1;
      this.startAt = this.takeTime();
      this.setState({currentQuestionNum, userAnswer: "", showModal: false});
    }
  }

  hasMoreQuestions() {
    let testPlan = this.getTestPlan();
    let currentQuestionNum = this.getCurrentQuestionNum();
    return (testPlan.length - 1) > currentQuestionNum;
  }

  createQuestionSummary(){
    return(
      <div>
        <div className="answersCompare">
          <div className="userAnswer">
            <div>Your:</div>
            <div>{this.getUserAnswer()}</div>
          </div>
          <div className="rightAnswer">
            <div>Right:</div>
            <div>{this.getRightAnswer()}</div>
          </div>
        </div>
        {this.createCompliment()}
        <button type="button" className="btn btn-primary" onClick={this.onCloseModalClicked.bind(this)}>Let's continue!</button>
      </div>
    );
  }

  createExperimentSummary(){
    return(
      <div>
        <div className="thankYou">Thank you so much for taking part in our experiment!</div>
        <div>Remember, the questions you answered were randomly picked from a bank of questions. You might got especially hard or especially easy questions, so you cannot actually compare your result with others..</div>
        <div className="finalResults">You answered correctly on {this.getRightAnswersNum()} out of {this.getTotalNumberOfQuestions()} questions</div>
      </div>
    );
  }

  createQuestionSummaryModal() {
    let modalContent = this.createQuestionSummary();
    if(!this.hasMoreQuestions()){
      modalContent = this.createExperimentSummary();
    }
    let customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <Modal
        isOpen={this.state.showModal}
        contentLabel="summary"
        style={customStyles}
      >
        {modalContent}
      </Modal>
    );
  }

  onCloseModalClicked(){
    this.continueToNextQuestion();
  }

  createCompliment() {
    if(!this.theUserAnswerCorrectly()){
      return;
    }
    let compliment = this.getCompliment();
    return (
      <div className="compliment">
        {compliment}
      </div>
    );
  }

  getCompliment(){
    let compliments = ["Good!", "Good :)", "Nice :)", "Nice!", "Wow!", "Wow :)", "Right :)", "Right!"];
    return compliments[this.getRandomInt(0, compliments.length-1)];
  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  theUserAnswerCorrectly() {
    return this.getUserAnswer() == this.getRightAnswer();
  }

  countScore() {
    if(this.theUserAnswerCorrectly()){
      this.increaseRightAnswersNum();
    }
  }

  increaseRightAnswersNum() {
    this.rightAnswersNum ++;
  }

  getRightAnswersNum() {
    return this.rightAnswersNum;
  }
}

export default ExperimentPage;
