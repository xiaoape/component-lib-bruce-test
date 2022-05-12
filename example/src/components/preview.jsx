import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Button, Modal } from 'antd';
const Preview = ({ visible, onCancel }) => {


  return (
    <Modal
      width={'50%'}
      visible={visible}
      title="Preview"
      onCancel={onCancel}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={() => onCancel()}
        >
          Ok
        </Button>,
      ]}
    >
        some text
    </Modal>
  );
};

export const previewShow = (props) => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  document.body.appendChild(div);

  const close = () => {
    root.unmount(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  root.render(<Preview visible={true} onCancel={close} {...props} />)
};

export default Preview;
