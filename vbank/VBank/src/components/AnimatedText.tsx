import React, { FC, useEffect, useState } from 'react';
import { appendClasses } from '../common/common';

interface AnimatedTextProps {
    className?: string;
    text?: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, className }) => {
    const [value, setValue] = useState(text);
    const [recentlyChanged, setRecentlyChanged] = useState(false);

    useEffect(() => {
        if (value !== text) {
            setValue(text);
            setRecentlyChanged(true);
            setTimeout(() => setRecentlyChanged(false), 200);
        }
    }, [text]);

    return (
        <span className={appendClasses(className, [recentlyChanged ? 'opacity-50' : 'transition-all duration-500'])}>
            {value}
        </span>
    );
};

export default AnimatedText;
