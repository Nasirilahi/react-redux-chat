import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App.jsx';
import WelcomePage  from './components/WelcomePage.jsx';
import ChatContainer from './components/ChatContainer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
const store = configureStore();

//const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
    <Route path="/chat" component={ChatContainer} />
  </Route>
);


ReactDOM.render(
   <Provider store={store}>
    <div style={{height: '100%'}}>
      <Router routes={routes} history={browserHistory} />
    </div>
  </Provider>, document.getElementById('app'));