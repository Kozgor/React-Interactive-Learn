import { describe, test, expect } from "vitest";
import { configureStore } from '@reduxjs/toolkit';
import { launchesSlice } from './slices';

const { reducer, actions } = launchesSlice;
const { addLaunch, removeLaunch } = actions;

describe('Launches reducer', () => {
    test('Should handle addLaunch', () => {
        const initialState = { launches: [] };
        const store = configureStore({ reducer, preloadedState: initialState });

        store.dispatch(addLaunch(1));
        store.dispatch(addLaunch(2));

        expect(store.getState().launches).toEqual([1, 2]);
    });

    test('Should handle removeLaunch', () => {
        const initialState = { launches: [1, 2, 3] };
        const store = configureStore({ reducer, preloadedState: initialState });

        store.dispatch(removeLaunch(2));

        expect(store.getState().launches).toEqual([1, 3]);
    });
});