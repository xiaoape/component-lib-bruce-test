import Modal from './Modal';
import { useState } from 'react';
import React from 'react';
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello, world!</h1>
          <p>This is a modal dialog.</p>
        </Modal>
      )}
    </>
  );
}

export default App;
