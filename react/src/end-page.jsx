import React, { Component } from 'react';
import * as UserService from './user-service';
import './end-page.scss';

class EndPage extends Component {

  constructor(props) {
    super(props);
    UserService.getUser().then((user)=>{document.body.classList.add(user.mode);});
  };

  render() {
    return(
      <div className="endPage">
      </div>
    );
  }
}

export default EndPage;
