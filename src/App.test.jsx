import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

describe("App component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><App /></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("App component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("App component has app-container", () => {
        const appContainer = screen.getByTestId("app-container");

        expect(appContainer).toBeInTheDocument();
    });
});
