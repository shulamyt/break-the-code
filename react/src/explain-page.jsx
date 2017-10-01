import React, { Component } from 'react';
import './explain-page.scss';

class ExplainPage extends Component {
  render() {
    return(
      <div className='explainPage'>
        <button type="button" className="btn btn-primary" onClick={this.onLetsStartClicked.bind(this)}>Let's start!</button>
      </div>
    );
  }

  onLetsStartClicked() {
    this.props.history.push('/experiment');
  }
}

export default ExplainPage;
