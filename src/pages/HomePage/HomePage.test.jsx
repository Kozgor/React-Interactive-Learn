import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import store from "../../store/store";

describe("App component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><HomePage /></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("HomePage component mounts properly", () => {
        expect(component).toBeTruthy();
    });
    test("HomePage component has app-container", () => {
    const appContainer = screen.getByTestId("app-container");

    expect(appContainer).toBeInTheDocument();
});
});