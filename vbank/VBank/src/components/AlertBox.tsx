import React, { FC } from 'react';
import Alert from './Alert';
import { Message, RootState } from '../redux/types';
import { useSelector } from 'react-redux';

const AlertBox: FC = () => {
    const messages: Message[] = useSelector((state: RootState) => state.messages);

    return (
        <div className="absolute top-4 w-full max-h-screen z-50 pointer-events-none">
            {messages.map((message, index) => (
                <Alert key={`alert-${index}`} message={message.message} timeout={message.timeout} type={message.type} />
            ))}
        </div>
    );
};

export default AlertBox;
