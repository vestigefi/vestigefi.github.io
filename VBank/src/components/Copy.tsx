import React, { FC, useState } from 'react';
import { appendClasses } from '../common/common';

interface CopyProps {
    className?: string;
    copyValue?: string;
}

const Copy: FC<CopyProps> = ({ className, copyValue, children }) => {
    const [copied, setCopied] = useState(false);

    const copy = (e) => {
        e.stopPropagation();
        setCopied(true);
        navigator.clipboard.writeText(copyValue);
        setTimeout(() => setCopied(false), 500);
    };

    return (
        <div className={appendClasses('text-center cursor-pointer relative', [className])} onClick={copy}>
            <div
                className={appendClasses(
                    'absolute w-full h-full flex justify-center items-center transition-all bg-black select-none',
                    [copied ? 'bg-opacity-100' : 'bg-opacity-0 text-transparent'],
                )}
            >
                Copied!
            </div>
            {children}
        </div>
    );
};

export default Copy;
