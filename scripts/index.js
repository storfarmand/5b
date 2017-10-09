import constants from './constants';
import content from './content';
import events from './events';

import React from 'react';
import ReactDOM from 'react-dom';

import Events from './experiences/events';

require('../styles/main.less');

let app = document.querySelector('.app');

ReactDOM.render(
  <Events
    constants={constants}
    content={content}
    events={events}
  />,
app);
