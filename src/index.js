import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './js/store/store';

import './styles/index.scss';
import App from './js/components/app/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

