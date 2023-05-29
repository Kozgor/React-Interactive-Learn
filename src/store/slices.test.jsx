import { describe, test, expect } from "vitest";
import { configureStore } from '@reduxjs/toolkit';
import { launchesSlice } from './slices';

const { reducer, actions } = launchesSlice;
const { addLaunch, removeLaunch } = actions;

describe('Launches reducer', () => {
    test('Should handle addLaunch', () => {
        const initialState = { launches: [] };
        const store = configureStore({ reducer, preloadedState: initialState });

        store.dispatch(addLaunch({
            name: 'Test1',
            desc: 'desc1',
            flightId: 1
        },));
        store.dispatch(addLaunch({
            name: 'Test2',
            desc: 'desc2',
            flightId: 2
        },));

        expect(store.getState().launches).toEqual([
            {
                name: 'Test1',
                desc: 'desc1',
                flightId: 1
            },
            {
                name: 'Test2',
                desc: 'desc2',
                flightId: 2
            },
        ]);
    });

    test('Should handle removeLaunch', () => {
        const initialState = {
            launches: [
                {
                    name: 'Test1',
                    desc: 'desc1',
                    flightId: 1
                },
                {
                    name: 'Test2',
                    desc: 'desc2',
                    flightId: 2
                },
            ]
        };
        const store = configureStore({ reducer, preloadedState: initialState });

        store.dispatch(removeLaunch(2));

        expect(store.getState().launches).toEqual([{
            name: 'Test1',
            desc: 'desc1',
            flightId: 1
        }]);
    });
});