import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';
import configureStore from './store';

const rootElement = document.getElementById('root');

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement,
  );
};

render(App);

/* eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}

registerServiceWorker();
