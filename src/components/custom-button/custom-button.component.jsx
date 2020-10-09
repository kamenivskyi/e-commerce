import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignin,
  inverted,
  type = 'button',
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignin ? 'google-sign-in' : ''
    } custom-button`}
    type={type}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
