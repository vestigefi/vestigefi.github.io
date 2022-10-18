import React, { FC, ReactElement } from 'react';
import { FaDiscord, FaGithub, FaReddit, FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';
import LinkIcon from '../../LinkIcon';

const classes = {
    root: 'px-4 py-3 flex flex-col w-full max-w-screen-2xl space-y-2 sm:space-y-0 sm:flex-row justify-between items-center',
    copyright: 'items-center text-xs flex flex-col space-x-3 space-y-1 sm:space-y-0 sm:flex-row',
    links: 'flex items-center space-x-3 text-sm md:text-base lg:text-xl text-white',
    about: 'font-bold text-sm cursor-pointer text-md',
};

const links: { icon: ReactElement; href: string }[] = [
    { icon: <FaDiscord />, href: 'https://discord.gg/uwkeEeytt9' },
    { icon: <FaTwitter />, href: 'https://twitter.com/vestigefi/' },
    { icon: <FaReddit />, href: 'https://www.reddit.com/r/vestigefi/' },
    { icon: <FaTelegramPlane />, href: 'https://t.me/tinychart/' },
    { icon: <FaGithub />, href: 'https://github.com/tinychart/' },
    { icon: <FaEnvelope />, href: 'mailto:team@tinychart.org' },
];

const Footer: FC = () => {
    return (
        <div className={classes.root}>
            <div className={classes.copyright}>
                <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">Vestige © 2022</span>
                </div>
            </div>
            <div className={classes.links}>
                {links.map((link, index) => (
                    <LinkIcon key={`link-${index}`} icon={link.icon} href={link.href} />
                ))}
            </div>
        </div>
    );
};

export default Footer;
