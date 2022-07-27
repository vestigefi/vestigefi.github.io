import React, { FC, useEffect, useState } from 'react';
import Spinner from './Spinner';
import { appendClasses } from '../common/common';

const Curtain: FC = () => {
    const [closed, setClosed] = useState(true);

    useEffect(() => {
        setTimeout(() => setClosed(false), 300);
    }, []);

    return (
        <div
            className={appendClasses('fixed top-0 left-0 z-50 w-full bg-black transition-all', [
                closed ? 'h-screen' : 'h-0',
            ])}
        >
            <div className={appendClasses('transition-all', [!closed && 'pointer-events-none opacity-0'])}>
                <Spinner />
            </div>
        </div>
    );
};

export default Curtain;
