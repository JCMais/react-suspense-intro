import React from 'react';

import logo from '../logo.svg';

export function LoadingSpinnerImage(props) {
  return (
    <img
      src={logo}
      className={`loading-spinner ${props.className}`}
      alt="logo"
    />
  );
}

export function LoadingSpinner() {
  return (
    <div>
      <h2>Loading...</h2>
      <LoadingSpinnerImage />
    </div>
  );
}
