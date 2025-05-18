import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';
import machineReducer from './machineSlice';

// 1. Combine reducers
const rootReducer = combineReducers({
    pizza: pizzaReducer,
    machine: machineReducer
});

// 2. Define RootState from rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// 3. Setup store with optional preloadedState
export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}

// 4. Create default store
export const store = setupStore();

// 5. Define store-related types
export type AppStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
