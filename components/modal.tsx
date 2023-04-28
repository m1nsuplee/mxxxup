'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = { children: React.ReactNode };

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [modalHTMLElement, setModalHTMLElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setModalHTMLElement(document.getElementById('modal'));
  }, []);

  if (!modalHTMLElement) {
    return null;
  }

  return createPortal(
    <div className="z-50 absolute top-0 left-0 overflow-hidden w-screen h-screen flex justify-center items-center">
      {children}
    </div>,
    modalHTMLElement
  );
};

export default Modal;
