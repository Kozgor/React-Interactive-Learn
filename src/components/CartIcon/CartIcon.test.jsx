import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import CartIcon from "./CartIcon";
import classes from "./CartIcon.module.css"

describe("CartIcon component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><CartIcon amount={0} /></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("CartIcon component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("CartIcon component has banner role", () => {
        const banner = screen.getByRole("banner");

        expect(banner).toBeInTheDocument();
    });

    test("CartIcon component has value", () => {
        const value = screen.getByText("0");

        expect(value).toBeInTheDocument();
    });

    test("Added 'selected' style for icon", async () => {
        await component.unmount();
        component = render(<Provider store={store}><CartIcon amount={1}>Click</CartIcon></Provider>);

        const iconElement = screen.getByTestId("banner-icon");
        expect(iconElement).toHaveClass(classes.icon_selected);
    });
});