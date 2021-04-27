import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebaseApp } from './firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
