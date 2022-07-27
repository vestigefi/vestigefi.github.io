import React, { FC } from 'react';
import { appendClasses } from '../common/common';

interface LoaderProps {
    loading?: boolean;
    className?: string;
}

const Loader: FC<LoaderProps> = ({ loading, className, children }) => {
    return (
        <div className={appendClasses('relative', [className])}>
            {loading && (
                <div className="flex absolute top-0 bottom-0 justify-center z-30 items-center h-full w-full">
                    <img alt="" src={'/assets/Vestige-0.svg'} className="animate-pulse" width="30%" height="30%" />
                </div>
            )}
            <div className={appendClasses('w-full h-full', [loading ? 'opacity-30' : ''])}>{children}</div>
        </div>
    );
};

export default Loader;
