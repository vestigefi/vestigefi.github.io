import React, { FC, ReactElement } from 'react';

interface LinkIconProps {
    icon: ReactElement;
    href: string;
}

const LinkIcon: FC<LinkIconProps> = ({ icon, href }) => {
    return (
        <a href={href} className="text-white hover:text-blue-400 transition-all" target="_blank" rel="noreferrer">
            {icon}
        </a>
    );
};

export default LinkIcon;
