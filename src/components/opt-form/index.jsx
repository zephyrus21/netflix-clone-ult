import React from 'react';
import { Container, Input, Button, Text } from './styles/opt-form';

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

OptForm.Input = OptFormInput;
OptForm.Button = OptFormButton;
OptForm.Text = OptFormText;

export default OptForm;
