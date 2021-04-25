import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const OptFormInput = ({ children, ...restProps }) => {
  return <Input {...restProps} />;
};

const OptFormButton = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children}
      <img src='/images/icons/chevron-right.png' alt='Try' />
    </Button>
  );
};

const OptFormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const OptFormBreak = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

OptForm.Input = OptFormInput;
OptForm.Button = OptFormButton;
OptForm.Text = OptFormText;
OptForm.Break = OptFormBreak;

export default OptForm;
