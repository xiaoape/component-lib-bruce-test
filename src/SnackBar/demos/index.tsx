import React from 'react';
import { SnackBarShow } from 'component-lib-bruce-test'

function SnackBarDemo() {
 
  const handleClick = () => {
    SnackBarShow({ type: 'success', message: 'Email subscription success!' })
    SnackBarShow({ type: 'error', message: 'Email subscription error!' })
  }
  return (
    <button onClick={handleClick}>
      showSnackBar
    </button>
  );
}

export default SnackBarDemo;
