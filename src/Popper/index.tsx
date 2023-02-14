import React, { useState, useRef, useEffect } from 'react';
import PopperJS from 'popper.js';

const Popper = ({ children, content, placement = 'bottom' }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const popperRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const popper = popperRef.current;
    let popperInstance: any;
    if (trigger && popper) {
      popperInstance = new PopperJS(trigger, popper, {
        placement,
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport',
          },
        },
      });
    }

    return () => {
      popperInstance.destroy();
    };
  }, [placement]);

  return (
    <div
      ref={triggerRef}
      onClick={() => setIsVisible(!isVisible)}
      style={{ display: 'inline-block' }}
    >
      {children}
      {isVisible && (
        <div
          ref={popperRef}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '5px',
            position: 'absolute',
            zIndex: '1',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popper;
