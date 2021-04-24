import React from 'react';
import {
  Conatiner,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>;
};

Jumbotron.Conatiner = ({ children, ...restProps }) => {
  return <Conatiner {...restProps}>{children}</Conatiner>;
};
Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

export default Jumbotron;
