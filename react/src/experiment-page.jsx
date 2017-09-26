import React, { Component } from 'react';

class ExperimentPage extends Component {
  render() {
    return(
      <div>
        <div>ExperimentPage</div>
      </div>
    );
  }

  onLetsStartClicked() {
    this.props.history.push('/experiment');
  }
}

export default ExperimentPage;
