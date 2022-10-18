import React, { FC } from 'react';

const Ticker: FC = ({ children }) => {
    return <span className="font-mono opacity-80">{children}</span>;
};

export default Ticker;
