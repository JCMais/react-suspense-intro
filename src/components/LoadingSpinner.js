import React from 'react';

import logo from '../logo.svg';

export function LoadingSpinner() {
  return (
    <div>
      <h2>Loading...</h2>
      <img src={logo} className="loading-spinner" alt="logo" />
    </div>
  );
}
