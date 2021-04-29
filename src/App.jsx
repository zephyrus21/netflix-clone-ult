import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';

const App = () => {
  const user = null;
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
};

export default App;
