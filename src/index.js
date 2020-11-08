import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoListPanel from '@components/TodoListPanel/TodoListPanel.js';
import store from '@/store'
import './style.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <TodoListPanel />
  </Provider>,
  document.getElementById('root')
);

