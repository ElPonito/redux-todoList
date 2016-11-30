import 'grommet/scss/hpe/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './todoListApp';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

ReactDOM.render(<Provider store={store}><TodoListApp /></Provider>, document.getElementById('app'));

document.body.classList.remove('loading');