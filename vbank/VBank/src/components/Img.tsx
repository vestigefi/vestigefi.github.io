import React, { FC } from 'react';
import { appendClasses } from '../common/common';

interface ImgProps {
    src: string;
    className?: string;
}

const Img: FC<ImgProps> = ({ src, className }) => {
    return (
        <div className={appendClasses('relative select-none', [className])}>
            <img src={src} className="absolute h-full" alt="" />
        </div>
    );
};

export default Img;
