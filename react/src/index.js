import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import * as UserService from './user-service';

import App from './app';

const div = document.createElement('div');
document.body.append(div);
UserService.getUser();
render(<App />, document.getElementsByTagName("body")[0]);
