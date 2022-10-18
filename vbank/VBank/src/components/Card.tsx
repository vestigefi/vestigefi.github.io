import React, { FC } from 'react';
import { appendClasses } from '../common/common';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

interface CardProps {
    rootClassName?: string;
    className?: string;
    noPadding?: boolean;
    onClick?: () => void;
    onAuxClick?: () => void;
    hover?: boolean;
    noGradient?: boolean;
}

const Card: FC<CardProps> = ({
    children,
    rootClassName,
    className,
    noPadding,
    onClick,
    onAuxClick,
    hover,
    noGradient,
}) => {
    const colors = useSelector((state: RootState) => state.colors);

    return (
        <div
            style={{ backgroundColor: hover ? undefined : colors.background }}
            className={appendClasses('transition-all rounded-lg', [
                rootClassName,
                hover && 'bg-black hover:bg-white hover:bg-opacity-5',
            ])}
        >
            <div
                onClick={onClick}
                onAuxClick={onAuxClick}
                style={{
                    background: noGradient
                        ? undefined
                        : `linear-gradient(240deg, ${colors.foreground}FF 0%, ${colors.foreground}30 20%, ${colors.foreground}30 80%, ${colors.foreground}FF 100%)`,
                }}
                className={appendClasses('shadow-lg rounded-lg w-full h-full', [className, !noPadding && 'p-4'])}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;
