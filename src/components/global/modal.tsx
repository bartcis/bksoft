import React, { useEffect, useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

let modalRoot: any;

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot = document.querySelector('#modal');

    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
