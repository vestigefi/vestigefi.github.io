import React, { FC } from 'react';
import { appendClasses } from '../common/common';

interface ModalProps {
    open?: boolean;
    onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
    return (
        <div
            style={{ margin: 0 }}
            className={appendClasses(
                'fixed left-0 top-0 flex justify-center w-full h-screen items-center bg-black transition-all p-8',
                [open ? 'bg-opacity-80 z-20' : 'bg-opacity-0 pointer-events-none'],
            )}
            onClick={(event) => {
                event.stopPropagation();
                if (onClose) onClose();
            }}
        >
            {open && (
                <div className="relative" onClick={(event) => event.stopPropagation()}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Modal;
