import React from 'react';
import Button from './style';

const BasicButton = ({children, ...rest}) => {
  return (
    // variant, shape, size, border, color, font
    <Button {...rest}>
      {children}
    </Button>
  );
};

export default BasicButton;