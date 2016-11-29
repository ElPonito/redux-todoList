import 'grommet/scss/hpe/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './todoListApp';

ReactDOM.render(<TodoListApp />, document.getElementById('app'));

document.body.classList.remove('loading');