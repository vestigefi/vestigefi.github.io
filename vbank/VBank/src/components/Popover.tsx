import React, { FC, useState } from 'react';
import { Popover as TinyPopover } from 'react-tiny-popover';
import { CSSTransition } from 'react-transition-group';
import { BREAKPOINTS, useWindowSize } from '../common/common';

interface PopoverProps {
    position?: 'left' | 'right' | 'bottom' | 'top';
    align?: 'start' | 'center' | 'end';
    content?: React.ReactNode;
    padding?: number;
    on?: 'click' | 'hover';
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    toggleOnClick?: boolean;
}

const Popover: FC<PopoverProps> = ({
    isOpen,
    padding,
    setIsOpen,
    on,
    position,
    toggleOnClick,
    content,
    align,
    children,
}) => {
    const size = useWindowSize();
    const isMobile = size[0] < BREAKPOINTS.md;
    const [isOpenInternal, setIsOpenInternal] = useState(false);

    const toggle = (e) => {
        e.stopPropagation();
        if (setIsOpen) {
            setIsOpen(!isOpen);
        } else {
            setIsOpenInternal(!isOpenInternal);
        }
    };

    const open = (e) => {
        e.stopPropagation();
        if (setIsOpen) {
            setIsOpen(true);
        } else {
            setIsOpenInternal(true);
        }
    };

    const close = (e) => {
        e.stopPropagation();
        if (setIsOpen) {
            setIsOpen(false);
        } else {
            setIsOpenInternal(false);
        }
    };

    return (
        <TinyPopover
            onClickOutside={close}
            isOpen={true}
            padding={padding || 2}
            positions={[position || 'bottom']}
            containerClassName="z-30"
            align={align}
            content={
                <CSSTransition
                    in={isOpen !== undefined ? isOpen : isOpenInternal}
                    timeout={150}
                    classNames="alert"
                    unmountOnExit
                >
                    <>{content}</>
                </CSSTransition>
            }
        >
            <div
                onClick={isMobile || on === 'click' ? (toggleOnClick ? toggle : open) : undefined}
                onPointerEnter={isMobile || on !== 'hover' ? undefined : open}
                onPointerLeave={isMobile || on !== 'hover' ? undefined : close}
            >
                {children}
            </div>
        </TinyPopover>
    );
};

export default Popover;
