import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'; //dont need to include index!!
import AppRouter from './router/AppRouter';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));


ReactDOM.render(
  <Provider store={store}>
    <App>
      <AppRouter />
    </App>
  </Provider>,
  document.getElementById('root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);
