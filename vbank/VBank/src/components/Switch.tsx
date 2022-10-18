import React, { FC } from 'react';
import { appendClasses } from '../common/common';

interface SwitchProps {
    active?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
    disablePadding?: boolean;
    className?: string;
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
}

const classes = {
    root: 'transition-all w-11 h-6 flex items-center bg-gray-300 rounded-full px-1',
    disabled: 'bg-gray-300 opacity-8 cursor-not-allowed',
    active: 'cursor-pointer',
    activeColor: 'bg-blue-600',
    inactive: 'cursor-pointer',
    inactiveColor: 'bg-gray-400',
    defaultColor: 'bg-blue-600',
    padding: 'mx-3',
    dot: 'transition-transform bg-white w-4 h-4 rounded-full shadow-md transform',
    dotActive: 'translate-x-5',
    label: 'select-none transition-all cursor-pointer',
    labelActive: 'opacity-80 font-bold',
    labelInactive: 'opacity-20 font-bold',
    labelDisabled: 'cursor-not-allowed',
    labelNotDisabled: 'cursor-pointer',
};

const Switch: FC<SwitchProps> = ({ active, disabled, onToggle, disablePadding, className, prefix, suffix }) => {
    const usesLabel = prefix || suffix;
    const switchComponent = (
        <div
            className={appendClasses(classes.root, [
                disabled ? classes.disabled : active ? classes.active : classes.inactive,
                !disabled && (usesLabel ? classes.defaultColor : active ? classes.activeColor : classes.inactiveColor),
                !disablePadding && classes.padding,
                className,
            ])}
            onClick={disabled ? undefined : onToggle}
        >
            <div className={appendClasses(classes.dot, [active && classes.dotActive])} />
        </div>
    );

    return prefix || suffix ? (
        <div className="flex items-center">
            <span
                onClick={active ? onToggle : undefined}
                className={appendClasses(classes.label, [
                    active || disabled ? classes.labelInactive : classes.labelActive,
                    disabled ? classes.labelDisabled : classes.labelNotDisabled,
                ])}
            >
                {prefix}
            </span>
            {switchComponent}
            <span
                onClick={active ? undefined : onToggle}
                className={appendClasses(classes.label, [
                    !active || disabled ? classes.labelInactive : classes.labelActive,
                    disabled ? classes.labelDisabled : classes.labelNotDisabled,
                ])}
            >
                {suffix}
            </span>
        </div>
    ) : (
        switchComponent
    );
};

export default Switch;
