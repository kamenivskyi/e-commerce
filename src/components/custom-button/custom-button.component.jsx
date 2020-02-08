import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, type, ...otherProps }) => (
  <button
    className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`}
    type={type || 'button'}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
