import React, { FC, MouseEventHandler } from 'react';
import { appendClasses } from '../common/common';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

interface ButtonProps {
    className?: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onAuxClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    secondary?: boolean;
    icon?: React.ReactNode;
    backgroundColor?: string;
    title?: string;
    noPadding?: boolean;
}

const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    onAuxClick,
    disabled,
    secondary,
    icon,
    title,
    backgroundColor,
    noPadding,
}) => {
    const colors = useSelector((state: RootState) => state.colors);

    return (
        <button
            style={{
                backgroundColor: backgroundColor ? backgroundColor : secondary ? colors.foreground : colors.active,
            }}
            className={appendClasses('px-3 py-2 rounded-full transition-all select-none', [
                className,
                disabled ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80 active:opacity-60',
                !noPadding && 'px-3 py-2',
            ])}
            onClick={disabled ? undefined : onClick}
            onAuxClick={disabled ? undefined : onAuxClick}
            title={title}
        >
            <div className="flex items-center space-x-2 h-6">
                {icon && icon}
                {children && <div className="align-middle w-full h-full">{children}</div>}
            </div>
        </button>
    );
};

export default Button;
