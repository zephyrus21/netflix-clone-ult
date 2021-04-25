import React from 'react';
import { Header, OptForm, Feature } from '../components';
import * as ROUTES from '../constants/routes';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src='/images/logo.svg' alt='logo' />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </Feature>
    </Header>
  );
};

export default HeaderContainer;
