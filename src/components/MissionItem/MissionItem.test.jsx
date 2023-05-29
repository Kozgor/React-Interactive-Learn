import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import store, { addLaunch, removeLaunch } from '../../store/store';
import React from 'react';
import MissionItem from './MissionItem';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("MissionItem component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><MissionItem /></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("MissionItem component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("MissionItem component has mission-item", () => {
        const item = screen.getByTestId("mission-item");

        expect(item).toBeInTheDocument();
    });

    test("MissionItem component has button", () => {
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test('onSelectHandler adds or removes mission ID from the store', async () => {
        await component.unmount();

        const flightId = 1;
        const initialState = { launches: [{ name: 'Test 0', desc: 'Test 0', flightId: 0 }] };
        const store = mockStore(initialState);

        render(
        <Provider store={store}>
            <MissionItem name="Test Mission" desc="Test Description" flightId={flightId} />
        </Provider>
        );

        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(store.getActions()).toEqual([addLaunch({ name: 'Test Mission', desc: 'Test Description', flightId: 1 })]);

        fireEvent.click(button);
        expect(store.getActions()).toEqual([addLaunch({ name: 'Test Mission', desc: 'Test Description', flightId: 1 }), removeLaunch(flightId)]);
    });
});
