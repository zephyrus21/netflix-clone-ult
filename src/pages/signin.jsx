import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import FooterContanier from '../containers/footer';

const Signin = () => {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src='/images/logo.svg' alt='logo' />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>

      <FooterContanier />
    </>
  );
};

export default Signin;
