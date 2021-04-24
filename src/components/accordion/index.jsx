import React, { useState, createContext, useContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const AccordionTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const AccordionFrame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

const AccordionHeader = ({ children, ...restProps }) => {
  const { setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}>
      {children}
    </Header>
  );
};

const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.Title = AccordionTitle;
Accordion.Frame = AccordionFrame;
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
