import React, { FC } from 'react';
import Popover from './Popover';
import Card from './Card';
import { IoInformationCircle } from 'react-icons/io5';

const Info: FC = ({ children }) => {
    return (
        <Popover on="hover" content={<Card rootClassName="max-w-md text-center">{children}</Card>}>
            <IoInformationCircle />
        </Popover>
    );
};

export default Info;
