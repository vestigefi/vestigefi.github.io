import { configureStore, Store } from '@reduxjs/toolkit';

import reducer from './reducer';
import { RootState } from './types';

let store;

const createStore = (preloadedState: RootState): Store => {
    if (typeof window === 'undefined') {
        return configureStore({
            reducer,
            preloadedState,
        });
    }
    if (!store) {
        store = configureStore({
            reducer,
            preloadedState,
        });
    }
    return store;
};

export default createStore;
