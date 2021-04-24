import React from 'react';
import { Footer } from '../components';

const FooterContanier = () => {
  return (
    <Footer>
      <Footer.Title>Questions</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href='#'>FAQ</Footer.Link>
          <Footer.Link href='#'>Investor Relations</Footer.Link>
          <Footer.Link href='#'>Ways to Watch</Footer.Link>
          <Footer.Link href='#'>Corporate Information</Footer.Link>
          <Footer.Link href='#'>Netflix Originals</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
};

export default FooterContanier;
