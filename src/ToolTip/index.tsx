import React, { useState } from 'react';

const ToolTip = ({ children, text }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: 'relative' }}
    >
      {children}
      {isVisible && (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.5rem',
            position: 'absolute',
            top: '-3rem',
            left: '1rem',
            borderRadius: '5px',
            zIndex: '1',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
