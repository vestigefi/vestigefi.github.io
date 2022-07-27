import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { appendClasses } from '../common/common';
import { MessageType } from '../redux/types';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface AlertProps {
    message: string;
    type: MessageType;
    timeout?: number;
}

const classes = {
    root: `
        border px-3 py-2 rounded mb-2 cursor-pointer max-w-max text-center
        m-auto pointer-events-auto flex w-full gap-2 items-center
    `,
    alertSuccess: 'bg-green-100 border-green-400 text-green-700',
    alertError: 'bg-red-100 border-red-400 text-red-700',
    text: 'block',
};

const Alert: FC<AlertProps> = ({ message, type, timeout }) => {
    const [visible, setVisible] = useState(false);

    const hide = () => {
        setVisible(false);
    };

    useEffect(() => {
        setVisible(true);
        if (timeout) {
            setTimeout(() => {
                hide();
            }, timeout);
        }
    }, []);

    return (
        <CSSTransition in={visible} timeout={150} classNames="alert" unmountOnExit>
            <div
                className={appendClasses(classes.root, [
                    type === 'success' ? classes.alertSuccess : classes.alertError,
                ])}
                role="alert"
                onClick={hide}
            >
                {type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                <span className={classes.text}>{message}</span>
            </div>
        </CSSTransition>
    );
};

export default Alert;
