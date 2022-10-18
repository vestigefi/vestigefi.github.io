import React, { FC } from 'react';
import { appendClasses } from '../../common/common';
import Img from '../Img';
import Anchor from '../Anchor';
import ReachConnectWallet from './ReachConnectWallet';
interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={appendClasses('flex justify-center pb-4', [className])}>
            <div className="w-full max-w-screen-2xl p-3 sm:p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Anchor href={'/'} className="h-12">
                        <Img src="/assets/Vestige-1.svg" className="h-full hidden sm:block w-24 sm:w-32" />
                        <Img src="/assets/Vestige-0.svg" className="h-full sm:hidden w-8" />
                    </Anchor>
                    <div className="rounded-lg bg-yellow-400 px-2 py-1 text-black font-prompt-bold select-none">
                        TestNet
                    </div>
                </div>
                <div className="flex space-x-1 sm:space-x-2 items-center">
                    <ReachConnectWallet />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
