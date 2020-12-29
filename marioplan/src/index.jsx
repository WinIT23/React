import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import './index.css';
import App from './App';
import firebaseConfig from './config/firebaseConfig';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
);

const rrfConfig = { userProfile: 'users' }

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center">loading...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
