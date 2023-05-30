import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import Button from "./Button";
import classes from "./Button.module.css";

describe("Button component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><Button>Click</Button></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("Button component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Button component has button element", () => {
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Button component has text for button", () => {
        const text = screen.getByText("Click");

        expect(text).toBeInTheDocument();
    });

    test("Using available styles from props", async () => {
        await component.unmount();
        const addStyles = 'green';
        component = render(<Provider store={store}><Button buttonClass={addStyles}>Click</Button></Provider>);

        const buttonElement = screen.getByText('Click');
        expect(buttonElement).toHaveClass(classes.btn_green);
    });
});
