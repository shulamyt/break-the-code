import React from 'react';
import { render } from 'react-dom';

import App from './app';

const div = document.createElement('div');
document.body.append(div);

render(<App />, div);
