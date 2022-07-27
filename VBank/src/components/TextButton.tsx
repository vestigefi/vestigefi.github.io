import React, { FC } from 'react';
import { appendClasses } from '../common/common';

interface TextButtonProps {
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

const TextButton: FC<TextButtonProps> = ({ className, children, active, onClick }) => {
    return (
        <div
            className={appendClasses(
                'cursor-pointer transition-all hover:opacity-80 rounded font-bold border-b-2 w-8 text-center select-none',
                [className, !active && 'border-opacity-30'],
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default TextButton;
