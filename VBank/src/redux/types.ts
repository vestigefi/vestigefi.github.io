import { Action } from 'redux';

export interface RootState {
    messages: Message[];
    colors: Colors;
    connector?: string;
    reach_wallet?: Wallet;
}

export interface Wallet {
    address: string;
    connector: string;
}

export interface Colors {
    background: string;
    foreground: string;
    active: string;
    neutral: string;
    light: string;
}

export type MessageType = 'success' | 'error';

export interface Message {
    message: string;
    type: MessageType;
    timeout?: number;
}

export interface CreateMessageAction extends Action {
    message: string;
    messageType: MessageType;
    timeout?: number;
}
