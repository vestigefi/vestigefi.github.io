import React, { FC } from 'react';
import { appendClasses } from '../common/common';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';
import { IoClose } from 'react-icons/io5';

interface InputProps {
    value?: string;
    onChange?: (value: string) => void;
    onEnter?: () => void;
    className?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    type?: string;
    onClear?: () => void;
    replaceInput?: React.ReactNode;
    showClear?: boolean;
    disableMaxWidth?: boolean;
}

const Input: FC<InputProps> = ({
    value,
    onChange,
    className,
    placeholder,
    icon,
    type,
    onEnter,
    onClear,
    replaceInput,
    showClear,
    disableMaxWidth,
}) => {
    const colors = useSelector((state: RootState) => state.colors);

    const handleKeyDown = (e) => {
        if (onEnter && e.key === 'Enter') onEnter();
    };

    return (
        <div
            className="flex px-3 rounded-full w-full space-x-2 items-center relative"
            style={{
                backgroundColor: colors.foreground,
                maxWidth: disableMaxWidth ? '100%' : '16rem',
            }}
        >
            {icon && icon}
            {replaceInput ? (
                <div className="bg-transparent py-2 pr-8 max-w-full truncate">{replaceInput}</div>
            ) : (
                <input
                    className={appendClasses('bg-transparent py-2 pr-8 max-w-full overflow-hidden', [className])}
                    value={value}
                    onChange={(event) => onChange(event.target.value || '')}
                    placeholder={placeholder}
                    type={type}
                    onKeyDown={handleKeyDown}
                />
            )}
            {(showClear !== undefined ? showClear : value != '') && (
                <IoClose
                    className="absolute right-4 hover:opacity-80 transition-all cursor-pointer"
                    onClick={(event) => {
                        event.stopPropagation();
                        onChange('');
                        if (onClear) onClear();
                    }}
                />
            )}
        </div>
    );
};

export default Input;
