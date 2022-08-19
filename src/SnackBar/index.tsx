import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button, Modal } from 'antd';
interface SnackBarProps {
    visible: boolean,
    onCancel: () => null
}
const SnackBar = ({ visible, onCancel }: SnackBarProps) => {
  return (
    <Modal
      width={'50%'}
      visible={visible}
      title="SnackBar"
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

export const SnackBarShow = (props: any) => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  document.body.appendChild(div);

  const close = () => {
    // @ts-ignore
    root.unmount(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  root.render(<SnackBar visible={true} onCancel={close} {...props} />)
};

export default SnackBar;
