import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  // clean old instances
  const elRef = useRef(null);

  if (!elRef.current) {
    const section = document.createElement('section');
    elRef.current = section;
  }

  useEffect(() => {
    const modalRoot = document.querySelector('#modal');

    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
    // run it once []
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
