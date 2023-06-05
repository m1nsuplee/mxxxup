'use client';

import { useLockBody } from '@/hooks';
import clsx from 'clsx';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalHTMLElement, setModalHTMLElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setModalHTMLElement(document.getElementById('modal'));
  }, []);

  useLockBody(isOpen);

  if (!modalHTMLElement) {
    return null;
  }

  const handleModalClose = () => onClose && onClose();

  const stopPropagteModalChildEvent = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <div
      className={clsx(
        'z-50 fixed top-0 left-0 overflow-hidden',
        'w-screen h-screen justify-center items-center',
        'bg-black bg-opacity-40',
        `${isOpen ? 'flex' : 'hidden'}`
      )}
      onClick={handleModalClose}
    >
      <div onClick={stopPropagteModalChildEvent}>{children}</div>
    </div>,
    modalHTMLElement
  );
};

export default Modal;
