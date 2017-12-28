import React, { Component } from 'react';
import './welcome-page.scss';

class WelcomePage extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className="welcomePage">

        <div className="header"></div>
        <div className="explain">
          <p>This site is part of an research in software engineering which aims to measure the comprehension of different code snippets. Note that the goal is to characterize the different code snippets, not to evaluate the programmers!</p>
          <p>During the game you will be given code snippets of varying difficulty drawn randomly from a pool. There is a time limit  for each question. Try to answer every question as quickly as possible (and of course correctly, but please think it out and do not guess!). Remember that your score depends on how fast and how correctly you answered. The total time is expected to be about 15 minutes.</p>
          <p>It is important to note:</p>
          <p>We do not collect any identifying information (not even IP addresses). All information gathered is anonymous for research purposes only.</p>
          <p>You may retire at any point (even though we'd be happy if you stay with us until the end).</p>
          <p>Continuing to the questionnaire indicates agreement to participate in the research. The research is supervised by Prof. Dror Feitelson, Dept. Computer Science, Hebrew University. For any concerns contact: Shulamyt Ajami (shulamyt@gmail.com)</p>
          <p>Good luck!</p>
        </div>
        <div className="hacker"></div>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.onGotYouClicked.bind(this)}>Got you!</button>
      </div>
    );
  }

  onGotYouClicked() {
    this.props.history.push('/personalInformationQuestionnaire');
  }
}

export default WelcomePage;
