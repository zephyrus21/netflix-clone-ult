import React from 'react';

import { FaqsContainer } from '../containers/faqs';
import FooterContanier from '../containers/footer';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContanier />
    </>
  );
};

export default Home;
