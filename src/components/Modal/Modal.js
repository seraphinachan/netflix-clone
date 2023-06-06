import React from 'react';
import './Modal.css';
import ReactPortal from '../ReactPortal';

export default function Modal({ children, isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="root-modal-container">
      <div className="modal_wrapper" onClick={handleClose}></div>
      <div className="modal_container">{children}</div>
    </ReactPortal>
  );
}
