import React, { FC } from 'react';
import { appendClasses } from '../common/common';
import Router from 'next/router';

interface AnchorProps {
    href: string;
    className?: string;
    blank?: boolean;
    noStyle?: boolean;
}

const Anchor: FC<AnchorProps> = ({ href, className, children, blank, noStyle }) => {
    return (
        <a
            href={href}
            className={appendClasses(noStyle ? '' : 'text-blue-500 hover:opacity-80 active:opacity-60 transition-all', [
                className,
            ])}
            target={blank ? '_blank' : undefined}
            onClick={
                blank
                    ? undefined
                    : (event) => {
                          event.preventDefault();
                          Router.push(href);
                      }
            }
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export default Anchor;
