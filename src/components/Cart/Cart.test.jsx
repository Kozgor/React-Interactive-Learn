import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { removeAllLaunches } from "../../store/store";
import React from "react";
import configureStore from "redux-mock-store";
import Cart from "./Cart";

const mockStore = configureStore([]);

describe("Cart component:", () => {
    let store;
    let component;
    const initialState = {
        launches: [
            {
                name: "Mission 1",
                desc: "Mission 1 description",
                flightId: 1,
            },
            {
                name: "Mission 2",
                desc: "Mission 2 description",
                flightId: 2,
            },
        ]
    };

    beforeEach(() => {
        document.body.innerHTML = '<div id="overlays" />';
        store = mockStore(initialState);

        component = render(
        <Provider store={store}>
            <Cart />
        </Provider>
        );
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("Cart component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Should get default amount", () => {
        const launchAmountInput = screen.getByTestId("launchAmount");
        const launchAmount = launchAmountInput.value;

        expect(launchAmount).toBe("2");
    });

    test("Should render the mission items in the cart", () => {
        const { getByText } = component;
        const mission1 = getByText("Mission 1");
        const mission2 = getByText("Mission 2");

        expect(mission1).toBeInTheDocument();
        expect(mission2).toBeInTheDocument();
    });

    test("Should update the launchAmount state on input change", () => {
        const { getByTestId } = component;
        const launchAmountInput = getByTestId("launchAmount");

        fireEvent.change(launchAmountInput, { target: { value: "3" } });

        expect(launchAmountInput.value).toBe("2");
    });

    test("Should not dispatch removeAllLaunchescall on checkoutHandler", () => {
        const checkoutButton = screen.getByText("Checkout");

        fireEvent.change(screen.getByTestId("launchAmount"), { target: { value: "0" } });
        fireEvent.click(checkoutButton);

        expect(store.getActions()).not.toEqual([removeAllLaunches()])
    });

    test("Should dispatch removeAllLaunchescall on checkoutHandler", () => {
        const checkoutButton = screen.getByText("Checkout");

        fireEvent.click(checkoutButton);

        expect(store.getActions()).toEqual([removeAllLaunches()])
    });

    test("Should show empty cart message", async () => {
        await component.unmount();
        const initialState = { launches: [] };
        store = mockStore(initialState);

        component = render(
        <Provider store={store}>
            <Cart />
        </Provider>)

        const emptyCartMessage = screen.getByText('Cart is empty!')

        expect(emptyCartMessage).toBeInTheDocument();
    });
});