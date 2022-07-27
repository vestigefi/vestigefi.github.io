import { AnyAction } from 'redux';
import { CREATE_MESSAGE, UPDATE_DATA } from './const';
import { COLORS } from '../common/const';
import { CreateMessageAction, RootState } from './types';

export const initialState: RootState = {
    colors: COLORS.base,
    messages: [],
};

const reducer = (state = initialState, action: AnyAction): RootState => {
    switch (action.type) {
        case CREATE_MESSAGE:
            const createMessage = action as CreateMessageAction;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        message: createMessage.message,
                        type: createMessage.messageType,
                        timeout: createMessage.timeout,
                    },
                ],
            };
        case UPDATE_DATA:
            return { ...state, [action.name]: action.data };
        default:
            return state;
    }
};

export default reducer;
