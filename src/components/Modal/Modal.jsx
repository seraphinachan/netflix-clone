import React from 'react';
import ReactPortal from '@components/ReactPortal';
import PropTypes from 'prop-types';

export default function Modal({ children, isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="root-modal-container">
      <div className="modal_wrapper" onClick={handleClose}></div>
      <div className="modal_container">{children}</div>
    </ReactPortal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
