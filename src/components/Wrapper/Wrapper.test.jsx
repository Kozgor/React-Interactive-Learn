import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import Wrapper from "./Wrapper";


describe("Wrapper component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><Wrapper/></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("Wrapper component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Wrapper component has app-container", () => {
        const appContainer = screen.getByTestId("app-container");

        expect(appContainer).toBeInTheDocument();
    });
});
