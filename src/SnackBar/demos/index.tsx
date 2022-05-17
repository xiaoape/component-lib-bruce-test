import React from 'react';
import { SnackBarShow } from 'component-lib-bruce-test'

function SnackBarDemo() {
 
  const handleClick = () => {
    SnackBarShow()
  }
  return (
    <button onClick={handleClick}>
      showSnackBar
    </button>
  );
}

export default SnackBarDemo;
