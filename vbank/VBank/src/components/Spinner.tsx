import React, { FC } from 'react';

const classes = {
    root: 'flex absolute top-0 bottom-0 justify-center z-30 items-center h-full w-full',
};

interface SpinnerProps {
    src?: string;
}

const Spinner: FC<SpinnerProps> = ({ src }) => {
    return (
        <div className={classes.root}>
            <img
                alt=""
                src={src || '/assets/Vestige-0.svg'}
                className="animate-pulse select-none"
                width={96}
                height={96}
            />
        </div>
    );
};

export default Spinner;
