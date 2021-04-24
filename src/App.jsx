import React from 'react';
import { FaqsContainer } from './containers/faqs';
import FooterContanier from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContanier />
    </>
  );
};

export default App;
