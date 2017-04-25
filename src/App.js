import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBXD498PLol0VM113oXv6YoGWiLbaxH02s',
      authDomain: 'manager-92ab7.firebaseapp.com',
      databaseURL: 'https://manager-92ab7.firebaseio.com',
      projectId: 'manager-92ab7',
      storageBucket: 'manager-92ab7.appspot.com',
      messagingSenderId: '756350030702'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
