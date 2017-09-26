import React, { Component } from 'react';

class ExplainPage extends Component {
  render() {
    return(
      <div>
        <div>Are you ready?</div>
        <div onClick={this.onLetsStartClicked.bind(this)}>Let's start!</div>
      </div>
    );
  }

  onLetsStartClicked() {
    this.props.history.push('/experiment');
  }
}

export default ExplainPage;
