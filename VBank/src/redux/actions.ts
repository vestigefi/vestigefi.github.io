import { CREATE_MESSAGE, UPDATE_DATA } from './const';
import { CreateMessageAction, RootState } from './types';
import store from './store';
import { initialState } from './reducer';

export const createMessage = (message: string, messageType: string, timeout?: number): void => {
    store(initialState).dispatch({
        type: CREATE_MESSAGE,
        messageType,
        message,
        timeout,
    } as CreateMessageAction);
};

export const updateReduxData = (name: keyof RootState, data: RootState[keyof RootState]): void => {
    store(initialState).dispatch({
        type: UPDATE_DATA,
        name,
        data,
    });
};
