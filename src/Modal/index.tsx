import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// 需要有这样的DOM节点：<div id="modal-root"></div>
const modalRoot = document.getElementById('modal-root'); // 父组件以外的 DOM 节点

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        // ESC 键
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="close" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
